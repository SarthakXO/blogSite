import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
import { pageRouter } from "./Routes/router.js";

const port = 3001;

app.use(express.json()); //convert sent data to JSON
app.use(cors());
app.use("/blog", pageRouter);

mongoose.connect(
  `mongodb+srv://sarthak24:modiji1234@blogger.jjrkoaw.mongodb.net/test
`
);

app.listen(port, () => {
  console.log(`App started at port http://localhost:${port}`);
});
