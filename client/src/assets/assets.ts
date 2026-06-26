import {
  LeafIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  StoreIcon,
} from "lucide-react";
import { SiFacebook, SiX, SiInstagram } from "@icons-pack/react-simple-icons";
import hero_bg from "./hero_bg.jpeg";
import delivery_truck from "./delivery_truck.svg";
import fruits_vegetables from "./fruits_vegetables.png";
import dairy_eggs from "./dairy_eggs.png";
import bakery from "./bakery.png";
import drinks from "./drinks.png";
import pantry_staples from "./pantry_staples.png";
import snacks from "./snacks.png";
import frozen_foods from "./frozen_foods.png";
import personal_care from "./personal_care.png";
import baby_care from "./baby_care.png";
import meat_seafood from "./meat_seafood.png";

export const assets = {
  delivery_truck,
  hero_bg,
};

export const storeInfo = {
  shortName: "India Bazaar OKC",
  fullName: "India Bazaar Oklahoma City",
  address: "3607 N Portland Ave, Oklahoma City, OK 73112",
  phone: "(405) 900-5455",
  phoneHref: "tel:+14059005455",
  hours: "10:30 AM - 9:00 PM daily",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=India+Bazaar+OKC+3607+N+Portland+Ave+Oklahoma+City+OK+73112",
  description:
    "Your neighborhood Indian grocery store in Oklahoma City for spices, rice, lentils, snacks, frozen foods, sweets, fresh produce, and everyday essentials.",
};

export const categoriesData = [
  {
    slug: "rice-grains",
    name: "Rice & Grains",
    image: pantry_staples,
  },
  { slug: "atta-flours", name: "Atta & Flours", image: bakery },
  { slug: "lentils-beans", name: "Lentils & Beans", image: pantry_staples },
  { slug: "spices-masalas", name: "Spices & Masalas", image: snacks },
  { slug: "snacks", name: "Snacks", image: snacks },
  { slug: "frozen-foods", name: "Frozen Foods", image: frozen_foods },
  {
    slug: "fresh-produce",
    name: "Fresh Produce",
    image: fruits_vegetables,
  },
  { slug: "dairy-paneer", name: "Dairy & Paneer", image: dairy_eggs },
  { slug: "sweets", name: "Sweets", image: baby_care },
  { slug: "beverages", name: "Beverages", image: drinks },
  { slug: "pickles-chutneys", name: "Pickles & Chutneys", image: meat_seafood },
  { slug: "pooja-household", name: "Pooja & Household", image: personal_care },
];

export const heroSectionData = {
  description:
    "Shop authentic Indian groceries, spices, snacks, fresh produce, frozen foods, sweets, and everyday essentials right here in Oklahoma City.",
  hero_image: hero_bg,
  hero_features: [
    { icon: StoreIcon, title: "Local OKC Store", desc: "Visit us on N Portland Ave" },
    { icon: LeafIcon, title: "Fresh Produce", desc: "Indian vegetables and herbs" },
    { icon: ClockIcon, title: "Open Daily", desc: "10:30 AM - 9:00 PM" },
    { icon: ShieldCheckIcon, title: "Easy Shopping", desc: "Browse, cart, and checkout" },
  ],
};

export const deliveryPartnerLoginImage =
  "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=200";

export const appPromoBannerData = {
  title: "Authentic Indian groceries close to home",
  description:
    "Find trusted pantry staples, regional favorites, fresh produce, frozen foods, sweets, snacks, and household essentials from India Bazaar OKC.",
};

export const footerData = {
  brand: {
    name: storeInfo.shortName,
    description:
      "A local Oklahoma City Indian grocery store serving families with South Asian groceries, spices, rice, lentils, snacks, sweets, frozen foods, and fresh produce.",
    socials: [
      { icon: SiFacebook, link: "#" },
      { icon: SiX, link: "#" },
      { icon: SiInstagram, link: "#" },
    ],
  },

  sections: [
    {
      title: "Quick Links",
      links: [
        { label: "All Products", to: "/products" },
        { label: "Specials", to: "/deals" },
        { label: "Contact & Location", to: "/contact" },
        { label: "Track Order", to: "/orders" },
        { label: "Delivery Partner", to: "/delivery" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { label: "My Account", to: "/login" },
        { label: "Order History", to: "/orders" },
        { label: "Addresses", to: "/addresses" },
        { label: "Store Hours", to: "/contact" },
      ],
    },
  ],

  contact: [
    { icon: MapPinIcon, text: storeInfo.address },
    { icon: PhoneIcon, text: storeInfo.phone },
    { icon: ClockIcon, text: storeInfo.hours },
    { icon: MailIcon, text: "Visit us in Oklahoma City" },
  ],

  bottom: {
    copyright: "© 2026 India Bazaar OKC. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};

export const statusColors: Record<string, string> = {
  Placed: "bg-blue-100 text-blue-700",
  Confirmed: "bg-indigo-100 text-indigo-700",
  Packed: "bg-purple-100 text-purple-700",
  "Out for Delivery": "bg-app-orange/10 text-app-orange",
  Delivered: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export const iconsForLeafpad = {
  truck: "https://cdn-icons-png.flaticon.com/512/3097/3097180.png",
  destination: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
};

export const dummyProducts = [];

export const dummyAdminDashboardData = {
  totalOrders: 1,
  totalUsers: 3,
  totalProducts: 27,
  outOfStock: 0,
  totalPartners: 2,
  recentOrders: [
    {
      shippingAddress: {
        label: "Home",
        address: "New Market Road ",
        city: "New York ",
        state: "NY",
        zip: "876543",
        lat: 40.7128,
        lng: -74.006,
      },
      liveLocation: {
        lat: 40.7128,
        lng: -74.006,
        updatedAt: "2026-04-06T08:41:27.211Z",
      },
      id: "69d366617ed7e54198d67dac",
      user: {
        id: "69bb6caf448f2d818db59122",
        name: "Admin",
        email: "admin@example.com",
      },
      items: [
        {
          product: "69c22613ae75a98c7cd13b3b",
          name: "Butter Croissant 100g",
          image:
            "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png",
          price: 45,
          quantity: 2,
          unit: "100g",
          id: "69d366617ed7e54198d67dad",
        },
        {
          product: "69c22613ae75a98c7cd13b36",
          name: "Barley 1kg",
          image:
            "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
          price: 140,
          quantity: 1,
          unit: "1kg",
          id: "69d366617ed7e54198d67dae",
        },
      ],
      paymentMethod: "cash",
      subtotal: 230,
      deliveryFee: 0,
      tax: 18.4,
      total: 248.4,
      status: "Delivered",
      statusHistory: [
        {
          status: "Placed",
          note: "Order placed successfully",
          id: "69d366617ed7e54198d67daf",
          timestamp: "2026-04-06T07:53:05.769Z",
        },
        {
          status: "Assigned",
          note: "Assigned to Rahul",
          id: "69d366ab7ed7e54198d67dbe",
          timestamp: "2026-04-06T07:54:19.796Z",
        },
        {
          status: "Packed",
          note: "Status updated to Packed",
          id: "69d366b37ed7e54198d67ddc",
          timestamp: "2026-04-06T07:54:27.171Z",
        },
        {
          status: "Out for Delivery",
          note: "Status updated to Out for Delivery",
          id: "69d366b57ed7e54198d67e00",
          timestamp: "2026-04-06T07:54:29.226Z",
        },
        {
          status: "Delivered",
          note: "Delivered by partner",
          id: "69d373207ed7e54198d681b1",
          timestamp: "2026-04-06T08:47:28.983Z",
        },
      ],
      deliveryPartner: {
        id: "69bbfc3866db7c6cdea47ede",
        name: "Rahul",
        phone: "987654321",
      },
      deliveryOtp: "",
      isPaid: false,
      createdAt: "2026-04-06T07:53:05.774Z",
      updatedAt: "2026-04-06T08:47:28.984Z",
      __v: 4,
    },
  ],
};

export const dummyDeliveryPartnerData = [
  {
    id: "69bbfc6c66db7c6cdea47ee4",
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "987654321",
    avatar: "",
    vehicleType: "bike",
    isActive: true,
    createdAt: "2026-03-19T13:38:52.827Z",
    updatedAt: "2026-03-19T13:38:52.827Z",
    __v: 0,
  },
  {
    id: "69bbfc3866db7c6cdea47ede",
    name: "Rahul",
    email: "rahul@example.com",
    phone: "987654321",
    avatar: "",
    vehicleType: "bike",
    isActive: true,
    createdAt: "2026-03-19T13:38:00.872Z",
    updatedAt: "2026-03-19T13:38:00.872Z",
    __v: 0,
  },
];

export const dummyDashboardOrdersData = [
  {
    shippingAddress: {
      label: "Home",
      address: "New Market Road ",
      city: "New York ",
      state: "NY",
      zip: "876543",
      lat: 40.7128,
      lng: -74.006,
    },
    liveLocation: {
      lat: 40.7128,
      lng: -74.006,
      updatedAt: "2026-04-06T08:41:27.211Z",
    },
    id: "69d366617ed7e54198d67dac",
    user: {
      id: "69bb6caf448f2d818db59122",
      name: "Admin",
      email: "admin@example.com",
    },
    items: [
      {
        product: "69c22613ae75a98c7cd13b3b",
        name: "Butter Croissant 100g",
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png",
        price: 45,
        quantity: 2,
        unit: "100g",
        id: "69d366617ed7e54198d67dad",
      },
      {
        product: "69c22613ae75a98c7cd13b36",
        name: "Barley 1kg",
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
        price: 140,
        quantity: 1,
        unit: "1kg",
        id: "69d366617ed7e54198d67dae",
      },
    ],
    paymentMethod: "cash",
    subtotal: 230,
    deliveryFee: 0,
    tax: 18.4,
    total: 248.4,
    status: "Delivered",
    statusHistory: [
      {
        status: "Placed",
        note: "Order placed successfully",
        id: "69d366617ed7e54198d67daf",
        timestamp: "2026-04-06T07:53:05.769Z",
      },
      {
        status: "Assigned",
        note: "Assigned to Rahul",
        id: "69d366ab7ed7e54198d67dbe",
        timestamp: "2026-04-06T07:54:19.796Z",
      },
      {
        status: "Packed",
        note: "Status updated to Packed",
        id: "69d366b37ed7e54198d67ddc",
        timestamp: "2026-04-06T07:54:27.171Z",
      },
      {
        status: "Out for Delivery",
        note: "Status updated to Out for Delivery",
        id: "69d366b57ed7e54198d67e00",
        timestamp: "2026-04-06T07:54:29.226Z",
      },
      {
        status: "Delivered",
        note: "Delivered by partner",
        id: "69d373207ed7e54198d681b1",
        timestamp: "2026-04-06T08:47:28.983Z",
      },
    ],
    deliveryPartner: {
      id: "69bbfc3866db7c6cdea47ede",
      name: "Rahul",
      email: "rahul@example.com",
      phone: "987654321",
    },
    deliveryOtp: "",
    isPaid: false,
    createdAt: "2026-04-06T07:53:05.774Z",
    updatedAt: "2026-04-06T08:47:28.984Z",
    __v: 4,
  },
  {
    shippingAddress: {
      label: "Home",
      address: "New Market Road ",
      city: "New York ",
      state: "NY",
      zip: "876543",
      lat: 40.7128,
      lng: -74.006,
    },
    liveLocation: {
      lat: 40.7128,
      lng: -74.006,
      updatedAt: "2026-04-06T08:41:27.211Z",
    },
    id: "69d366617ed7e54198d67dad",
    user: {
      id: "69bb6caf448f2d818db59122",
      name: "Admin",
      email: "admin@example.com",
    },
    items: [
      {
        product: "69c22613ae75a98c7cd13b3b",
        name: "Butter Croissant 100g",
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/zvoeqbvrbrt7atqj0dbu.png",
        price: 45,
        quantity: 2,
        unit: "100g",
        id: "69d366617ed7e54198d67dad",
      },
      {
        product: "69c22613ae75a98c7cd13b36",
        name: "Barley 1kg",
        image:
          "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/spb5sgy8g24rned9nwog.png",
        price: 140,
        quantity: 1,
        unit: "1kg",
        id: "69d366617ed7e54198d67dae",
      },
    ],
    paymentMethod: "cash",
    subtotal: 230,
    deliveryFee: 0,
    tax: 18.4,
    total: 248.4,
    status: "Out for Delivery",
    statusHistory: [
      {
        status: "Placed",
        note: "Order placed successfully",
        id: "69d366617ed7e54198d67daf",
        timestamp: "2026-04-06T07:53:05.769Z",
      },
      {
        status: "Assigned",
        note: "Assigned to Rahul",
        id: "69d366ab7ed7e54198d67dbe",
        timestamp: "2026-04-06T07:54:19.796Z",
      },
      {
        status: "Packed",
        note: "Status updated to Packed",
        id: "69d366b37ed7e54198d67ddc",
        timestamp: "2026-04-06T07:54:27.171Z",
      },
      {
        status: "Out for Delivery",
        note: "Status updated to Out for Delivery",
        id: "69d366b57ed7e54198d67e00",
        timestamp: "2026-04-06T07:54:29.226Z",
      },
    ],
    deliveryPartner: {
      id: "69bbfc3866db7c6cdea47ede",
      name: "Rahul",
      email: "rahul@example.com",
      phone: "987654321",
    },
    deliveryOtp: "754730",
    isPaid: false,
    createdAt: "2026-04-06T07:53:05.774Z",
    updatedAt: "2026-04-06T08:47:28.984Z",
    __v: 4,
  },
];

export const dummyCartData = [
  { product: dummyProducts[0], quantity: 1 },
  { product: dummyProducts[1], quantity: 1 },
  { product: dummyProducts[2], quantity: 1 },
];

export const dummyAddressData = [
  {
    label: "Home",
    address: "123 Main St ",
    city: "New York ",
    state: "NY",
    zip: "10001",
    isDefault: true,
    lat: 40.7128,
    lng: -74.006,
    id: "69d3652df9a340288f1a0f8c",
  },
  {
    label: "Work",
    address: "456 Market St ",
    city: "New York ",
    state: "NY",
    zip: "10002",
    isDefault: false,
    lat: 40.7128,
    lng: -74.006,
    id: "69d3652df9a340288f1a0f8d",
  },
];
