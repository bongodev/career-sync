import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const PORT = 5346;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
