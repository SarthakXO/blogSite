import express from "express";
import { blogModel } from "../models/blogSchema.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const blog = new blogModel(req.body);
  try {
    const response = await blog.save();
    res.json(response);
  } catch (err) {
    res.json(err);
  }
});

router.get("/show", async (req, res) => {
  const response = await blogModel.find({});
  res.json(response);
});

export { router as pageRouter };
