import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

const validateAddress = ({
  label,
  address,
  city,
  state,
  zip,
  lat,
  lng,
}: any) => {
  if (!label || !address || !city || !state || !zip) {
    return "Please provide label, address, city, state, and ZIP code";
  }
  if (lat == null || lng == null) {
    return "Location coordinates are required. Please allow location access.";
  }
  if (!Number.isFinite(Number(lat)) || !Number.isFinite(Number(lng))) {
    return "Location coordinates must be valid numbers";
  }
  return null;
};

const getUserAddresses = (userId: string) =>
  prisma.address.findMany({
    where: { userId },
    orderBy: { createdAt: "asc" },
  });

// GET /api/addresses
export const getAddresses = async (req: Request, res: Response) => {
  const addresses = await getUserAddresses(req.user!.id);
  res.json({ addresses });
};

// POST /api/addresses
export const addAddress = async (req: Request, res: Response) => {
  const { label, address, city, state, zip, isDefault, lat, lng } = req.body;
  const validationError = validateAddress({
    label,
    address,
    city,
    state,
    zip,
    lat,
    lng,
  });
  if (validationError) return res.status(400).json({ message: validationError });

  const userId = req.user!.id;
  const currentAddresses = await getUserAddresses(userId);
  const makeDefault = currentAddresses.length === 0 ? true : Boolean(isDefault);

  if (makeDefault) {
    await prisma.address.updateMany({
      where: { userId },
      data: { isDefault: false },
    });
  }

  await prisma.address.create({
    data: {
      userId,
      label: String(label).trim(),
      address: String(address).trim(),
      city: String(city).trim(),
      state: String(state).trim(),
      zip: String(zip).trim(),
      isDefault: makeDefault,
      lat: Number(lat),
      lng: Number(lng),
    },
  });

  const addresses = await getUserAddresses(userId);
  res.status(201).json({ addresses });
};

// PUT /api/addresses/:id
export const updateAddress = async (req: Request, res: Response) => {
  const { label, address, city, state, zip, isDefault, lat, lng } = req.body;
  const validationError = validateAddress({
    label,
    address,
    city,
    state,
    zip,
    lat,
    lng,
  });
  if (validationError) return res.status(400).json({ message: validationError });

  const userId = req.user!.id;
  const existing = await prisma.address.findFirst({
    where: { id: req.params.id as string, userId },
  });
  if (!existing) return res.status(404).json({ message: "Address not found" });

  if (isDefault) {
    await prisma.address.updateMany({
      where: { userId },
      data: { isDefault: false },
    });
  }

  await prisma.address.update({
    where: { id: existing.id },
    data: {
      label: String(label).trim(),
      address: String(address).trim(),
      city: String(city).trim(),
      state: String(state).trim(),
      zip: String(zip).trim(),
      isDefault: Boolean(isDefault),
      lat: Number(lat),
      lng: Number(lng),
    },
  });

  const addresses = await getUserAddresses(userId);
  res.json({ addresses });
};

// DELETE /api/addresses/:id
export const deleteAddress = async (req: Request, res: Response) => {
  const userId = req.user!.id;
  const existing = await prisma.address.findFirst({
    where: { id: req.params.id as string, userId },
  });
  if (!existing) return res.status(404).json({ message: "Address not found" });

  await prisma.address.delete({ where: { id: existing.id } });

  const addresses = await getUserAddresses(userId);
  res.json({ addresses });
};
