import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import authRouter from "./routes/authRoutes.js";
import productRouter from "./routes/productRotes.js";
import uploadRouter from "./routes/uploadRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import addressRouter from "./routes/addressRoutes.js";
import deliveryPartnerRouter from "./routes/deliveryPartnerRoutes.js";
import adminRouter from "./routes/adminRoutes.js";
import newsletterRouter from "./routes/newsletterRoutes.js";
import { stripeWebhook } from "./controllers/webhooks.js";

const app = express();
const clientUrl = process.env.CLIENT_URL;
const devOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://localhost:4173",
  "http://127.0.0.1:4173",
];

app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhook,
);

// Middleware
app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (process.env.NODE_ENV !== "production") {
        if (devOrigins.includes(origin)) return callback(null, true);
        return callback(new Error("Not allowed by CORS"));
      }
      if (clientUrl && origin === clientUrl) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/orders", orderRouter);
// Set up the "/api/inngest" (recommended) routes with the serve handler
app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/addresses", addressRouter);
app.use("/api/delivery", deliveryPartnerRouter);
app.use("/api/admin", adminRouter);
app.use("/api/newsletter", newsletterRouter);

// Error handling
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  if (error.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "Origin is not allowed" });
  }
  res.status(500).json({ message: error.message });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
