import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

const getDiscount = (product: { originalPrice?: number | null; price: number }) =>
  product.originalPrice && product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

const normalizeProductPayload = (body: any) => {
  const price = Number(body.price);
  const originalPrice =
    body.originalPrice === undefined || body.originalPrice === ""
      ? 0
      : Number(body.originalPrice);
  const stock = body.stock === undefined || body.stock === "" ? 0 : Number(body.stock);

  return {
    name: typeof body.name === "string" ? body.name.trim() : "",
    description:
      typeof body.description === "string" ? body.description.trim() : "",
    price,
    originalPrice,
    image: typeof body.image === "string" ? body.image.trim() : "",
    category: typeof body.category === "string" ? body.category.trim() : "",
    unit:
      typeof body.unit === "string" && body.unit.trim()
        ? body.unit.trim()
        : "piece",
    stock,
    isOrganic: Boolean(body.isOrganic),
    rating:
      body.rating === undefined || body.rating === "" ? 0 : Number(body.rating),
    reviewCount:
      body.reviewCount === undefined || body.reviewCount === ""
        ? 0
        : Number(body.reviewCount),
  };
};

const validateProductPayload = (
  product: ReturnType<typeof normalizeProductPayload>,
) => {
  if (!product.name) return "Product name is required";
  if (!product.category) return "Product category is required";
  if (!product.image) return "Product image is required";
  if (!Number.isFinite(product.price) || product.price < 0) {
    return "Product price must be a valid non-negative number";
  }
  if (!Number.isFinite(product.originalPrice) || product.originalPrice < 0) {
    return "Original price must be a valid non-negative number";
  }
  if (!Number.isInteger(product.stock) || product.stock < 0) {
    return "Stock must be a valid non-negative whole number";
  }
  if (
    !Number.isFinite(product.rating) ||
    product.rating < 0 ||
    product.rating > 5
  ) {
    return "Rating must be between 0 and 5";
  }
  if (!Number.isInteger(product.reviewCount) || product.reviewCount < 0) {
    return "Review count must be a valid non-negative whole number";
  }
  return null;
};

// GET /api/products/flash-deals
export const getFlashDeals = async (req: Request, res: Response) => {
  const products = await prisma.product.findMany({
    where: { stock: { gt: 0 } },
    orderBy: [{ originalPrice: "desc" }, { createdAt: "desc" }],
    take: 8,
  });

  res.json({
    products: products.map((product) => ({
      ...product,
      discount: getDiscount(product),
    })),
  });
};

// GET /api/products
export const getProducts = async (req: Request, res: Response) => {
  const { category, search, name, minPrice, maxPrice, sort, organic } =
    req.query;
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Math.max(Number(req.query.limit) || 12, 1), 100);
  const skip = (page - 1) * limit;

  const where: any = {};
  if (category && category !== "all") where.category = category as string;

  const searchTerm = search || name;
  if (searchTerm) {
    where.name = { contains: searchTerm as string, mode: "insensitive" };
  }

  if (organic === "true") where.isOrganic = true;
  if (organic === "false") where.isOrganic = false;

  if (minPrice || maxPrice) {
    where.price = {};
    if (minPrice) {
      const min = Number(minPrice);
      if (!Number.isFinite(min) || min < 0) {
        return res.status(400).json({ message: "Invalid minimum price" });
      }
      where.price.gte = min;
    }
    if (maxPrice) {
      const max = Number(maxPrice);
      if (!Number.isFinite(max) || max < 0) {
        return res.status(400).json({ message: "Invalid maximum price" });
      }
      where.price.lte = max;
    }
  }

  const orderBy: any =
    sort === "price-low" || sort === "price_asc"
      ? { price: "asc" }
      : sort === "price-high" || sort === "price_desc"
        ? { price: "desc" }
        : sort === "rating"
          ? { rating: "desc" }
          : sort === "name"
            ? { name: "asc" }
            : { createdAt: "desc" };

  const [total, products] = await Promise.all([
    prisma.product.count({ where }),
    prisma.product.findMany({ where, orderBy, skip, take: limit }),
  ]);

  res.json({
    products: products.map((product) => ({
      ...product,
      discount: getDiscount(product),
    })),
    total,
    page,
    limit,
    pages: Math.max(Math.ceil(total / limit), 1),
  });
};

// GET /api/products/:id
export const getProduct = async (req: Request, res: Response) => {
  const product = await prisma.product.findUnique({
    where: { id: req.params.id as string },
  });

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json({ product: { ...product, discount: getDiscount(product) } });
};

// POST /api/products
export const createProduct = async (req: Request, res: Response) => {
  const payload = normalizeProductPayload(req.body);
  const validationError = validateProductPayload(payload);
  if (validationError) return res.status(400).json({ message: validationError });

  const product = await prisma.product.create({ data: payload });
  res.status(201).json({ product });
};

// PUT /api/products/:id
export const updateProduct = async (req: Request, res: Response) => {
  const payload = normalizeProductPayload(req.body);
  const validationError = validateProductPayload(payload);
  if (validationError) return res.status(400).json({ message: validationError });

  try {
    const product = await prisma.product.update({
      where: { id: req.params.id as string },
      data: payload,
    });
    res.json({ product });
  } catch {
    res.status(404).json({ message: "Product not found" });
  }
};

// DELETE /api/products/:id
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    await prisma.product.update({
      where: { id: req.params.id as string },
      data: { stock: 0 },
    });
    res.json({ message: "Product marked out of stock" });
  } catch {
    res.status(404).json({ message: "Product not found" });
  }
};
