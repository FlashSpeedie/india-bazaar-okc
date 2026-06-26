import { Request, Response } from "express";
import { prisma } from "../config/prisma.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const subscribeNewsletter = async (req: Request, res: Response) => {
  const email =
    typeof req.body.email === "string" ? req.body.email.trim().toLowerCase() : "";

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: "Please provide a valid email" });
  }

  try {
    const subscriber = await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    });

    res.status(201).json({
      message: "Thanks for subscribing to India Bazaar OKC updates.",
      subscriber: { id: subscriber.id, email: subscriber.email },
    });
  } catch {
    res.status(500).json({ message: "Newsletter subscription is unavailable" });
  }
};
