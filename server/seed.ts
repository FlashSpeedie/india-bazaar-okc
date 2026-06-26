import { prisma } from "./config/prisma.js";
import { Prisma } from "@prisma/client";

// Adds or updates demo products without deleting existing catalog data.
const seedDB = async () => {
  try {
    const products: Prisma.ProductCreateManyInput[] = [
      {
        name: "Parle-G Biscuits 300g",
        description: "Classic Indian tea-time biscuits",
        price: 45,
        originalPrice: 50,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png",
        category: "snacks",
        unit: "100g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Toor Dal 2lb",
        description: "Essential split pigeon peas for dal, sambar, and everyday cooking",
        price: 420,
        originalPrice: 450,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/cxrrgnf12xuhkr4dyhi2.png",
        category: "lentils-beans",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Aashirvaad Atta 10lb",
        description: "Whole wheat flour for fresh roti, chapati, and paratha",
        price: 35,
        originalPrice: 40,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vy1xa7zovcu22smzapzv.png",
        category: "atta-flours",
        unit: "400g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Sona Masoori Rice 10lb",
        description: "Medium-grain rice for everyday South Indian meals",
        price: 140,
        originalPrice: 150,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
        category: "rice-grains",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "MDH Garam Masala 100g",
        description: "Aromatic spice blend for curries, sabzi, and marinades",
        price: 30,
        originalPrice: 35,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vnzb2qbwtpab5gnqvx0f.png",
        category: "spices-masalas",
        unit: "70g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Maggi Masala Noodles 280g",
        description: "Quick Indian-style masala noodles",
        price: 50,
        originalPrice: 55,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/dsep7owmwvfrukzbslqo.png",
        category: "snacks",
        unit: "280g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Thums Up 2L",
        description: "Chilled and refreshing, Perfect for celebrations",
        price: 60,
        originalPrice: 75,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/daiglpvgna1dlhjplbve.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Fresh Okra 1lb",
        description:
          "Fresh bhindi for sabzi, curries, and stir-fries",
        price: 18,
        originalPrice: 24,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/ceqgisupuizyste9aifg.png",
        category: "fresh-produce",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Limca 2L",
        description: "Perfect for parties and gatherings, Best served chilled",
        price: 75,
        originalPrice: 80,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/eljxcdud6fduwfim5rdx.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Royal Basmati Rice 10lb",
        description: "Long-grain aromatic basmati rice for biryani, pulao, and daily meals",
        price: 110,
        originalPrice: 120,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/dboutcrkdjhoxcvbbqne.png",
        category: "rice-grains",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Gopi Paneer 14oz",
        description:
          "Fresh paneer for curries, snacks, and homemade Indian dishes",
        price: 85,
        originalPrice: 90,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/cnjrpbcnqesqxy1wr30g.png",
        category: "dairy-paneer",
        unit: "12pcs",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Indian Eggplant 1lb",
        description:
          "Small eggplant for stuffed brinjal, curries, and roasted dishes",
        price: 45,
        originalPrice: 50,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/dsnmko6gqtyw31okby80.png",
        category: "fresh-produce",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Basmati Rice 20lb",
        description: "Long grain and aromatic, Perfect for biryani",
        price: 520,
        originalPrice: 550,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/evuovl2nlwdjukosfz23.png",
        category: "rice-grains",
        unit: "5kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Red Onion 2lb",
        description: "Kitchen essential for curries, chutneys, biryani, and everyday cooking",
        price: 45,
        originalPrice: 50,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/wnvtwlm2tphqburhsmyc.png",
        category: "fresh-produce",
        unit: "500g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Maaza Mango Drink 1L",
        description: "Refreshing lemon-lime flavor",
        price: 70,
        originalPrice: 76,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/qt1ypzsoqni12ghf2ryp.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Fresh Methi Bunch",
        description:
          "Fresh fenugreek greens for paratha, dal, curries, and sabzi",
        price: 15,
        originalPrice: 18,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/bhrtl76sscvmeiq4kchm.png",
        category: "fresh-produce",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Fresh Curry Leaves",
        description:
          "Aromatic curry leaves for tempering dals, chutneys, and South Indian dishes",
        price: 75,
        originalPrice: 80,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/r1wxfortw5h12g7egx7k.png",
        category: "fresh-produce",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Whole Wheat Atta 20lb",
        description: "Soft and fluffy rotis, Rich in nutrients",
        price: 230,
        originalPrice: 250,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/ooitbkcjcky0gkjmkatb.png",
        category: "atta-flours",
        unit: "5kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Green Chiles 1lb",
        description:
          "Fresh green chiles for Indian cooking, chutneys, and seasoning",
        price: 65,
        originalPrice: 70,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/jsmb7caaokhnyci2coga.png",
        category: "fresh-produce",
        unit: "500g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Frooti Mango Drink",
        description: "Sweet and fizzy",
        price: 65,
        originalPrice: 70,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/nexecd3mgyzrpeun1bee.png",
        category: "beverages",
        unit: "1.5L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Nanak Paneer 400g",
        description:
          "Soft and fresh, Rich in protein, Ideal for curries and snacks",
        price: 85,
        originalPrice: 90,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/vihqr6wquv57byurvz46.png",
        category: "dairy-paneer",
        unit: "200g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Kesar Mango Pulp 30oz",
        description:
          "Rich mango pulp for lassi, desserts, shrikhand, and sweets",
        price: 140,
        originalPrice: 150,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/nb1mpxuo4fdcik6ey5yj.png",
        category: "sweets",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Roma Tomato 2lb",
        description:
          "Fresh tomatoes for curries, chutneys, rasam, salads, and sauces",
        price: 28,
        originalPrice: 30,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/kdbfytxisrjymgy0ubhk.png",
        category: "fresh-produce",
        unit: "1kg",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Frozen Paratha 5ct",
        description:
          "Ready-to-heat layered paratha for quick meals and snacks",
        price: 35,
        originalPrice: 40,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/tzibj2ntsnbn4e0u5kwv.png",
        category: "frozen-foods",
        unit: "500g",
        stock: 100,
        isOrganic: true,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Kaju Katli 12oz",
        description:
          "Creamy and delicious, Perfect for pizzas and sandwiches, Rich in calcium",
        price: 130,
        originalPrice: 140,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/gek3mmiig3lixlkpxks8.png",
        category: "sweets",
        unit: "200g",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Amul Ghee 1L",
        description: "Fresh milk, Rich in calcium",
        price: 55,
        originalPrice: 60,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/ooamzy497lhsj2gjuwby.png",
        category: "dairy-paneer",
        unit: "1L",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Pooja Cotton Wicks",
        description: "Household and pooja essentials for daily prayer and festival needs",
        price: 90,
        originalPrice: 100,
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/pjt1y6xdo46tluemhf0o.png",
        category: "pooja-household",
        unit: "1kg",
        stock: 100,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 12,
      },
      {
        name: "Lijjat Papad Plain 200g",
        description: "Crisp papad for snacks, meals, and party platters",
        price: 3.99,
        originalPrice: 4.49,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&auto=format&fit=crop&q=80",
        category: "snacks",
        unit: "200g",
        stock: 80,
        isOrganic: false,
        rating: 4.6,
        reviewCount: 18,
      },
      {
        name: "Priya Mango Pickle 300g",
        description: "Tangy mango pickle for rice, roti, curd rice, and snacks",
        price: 4.99,
        originalPrice: 5.49,
        image:
          "https://images.unsplash.com/photo-1589135233689-8e17ac6a0080?w=600&auto=format&fit=crop&q=80",
        category: "pickles-chutneys",
        unit: "300g",
        stock: 60,
        isOrganic: false,
        rating: 4.4,
        reviewCount: 14,
      },
      {
        name: "Swad Coriander Chutney 250g",
        description: "Ready-to-serve chutney for samosas, chaat, and sandwiches",
        price: 3.49,
        originalPrice: 3.99,
        image:
          "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&auto=format&fit=crop&q=80",
        category: "pickles-chutneys",
        unit: "250g",
        stock: 45,
        isOrganic: false,
        rating: 4.3,
        reviewCount: 11,
      },
      {
        name: "Haldiram Gulab Jamun 1kg",
        description: "Classic Indian sweets for festivals, gatherings, and desserts",
        price: 8.99,
        originalPrice: 9.99,
        image:
          "https://images.unsplash.com/photo-1605197183280-3d6b6c431fbd?w=600&auto=format&fit=crop&q=80",
        category: "sweets",
        unit: "1kg",
        stock: 36,
        isOrganic: false,
        rating: 4.7,
        reviewCount: 21,
      },
      {
        name: "Deep Samosa 8ct",
        description: "Frozen samosas ready to heat and serve with chutney",
        price: 6.99,
        originalPrice: 7.99,
        image:
          "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=600&auto=format&fit=crop&q=80",
        category: "frozen-foods",
        unit: "8ct",
        stock: 50,
        isOrganic: false,
        rating: 4.5,
        reviewCount: 17,
      },
      {
        name: "Diya Set 12ct",
        description: "Traditional clay diyas for puja, Diwali, and home decor",
        price: 5.99,
        originalPrice: 6.99,
        image:
          "https://images.unsplash.com/photo-1604692092415-f2255f30f7d4?w=600&auto=format&fit=crop&q=80",
        category: "pooja-household",
        unit: "12ct",
        stock: 40,
        isOrganic: false,
        rating: 4.6,
        reviewCount: 9,
      },
    ];

    let created = 0;
    let updated = 0;
    for (const product of products) {
      const existing = await prisma.product.findFirst({
        where: { name: product.name },
      });
      if (existing) {
        await prisma.product.update({
          where: { id: existing.id },
          data: product,
        });
        updated++;
      } else {
        await prisma.product.create({ data: product });
        created++;
      }
    }

    console.log(`Seeded ${products.length} products (${created} created, ${updated} updated)`);

    console.log("Seed completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedDB();

// Completed backend
