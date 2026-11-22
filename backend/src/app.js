import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";

const app = express();

//middleware to parse JSON bodies
app.use(cors());
app.use(express.json());

//Mount auth routes

app.use('/api/auth', authRoutes);

app.get("/api/test", (req, res) => {
    res.json({ message: "API is working" });
  });

export default app;