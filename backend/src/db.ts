import mongoose from "mongoose";
import { envConfig } from "@/config/index";

import logger from "./config/logger";

const connectDB = async () => {
  try {
    const mongoURI: string = envConfig.DB.MONGO_URI ?? "";

    if (!mongoURI) {
      throw new Error("MONGO_URI is not defined in environment configuration");
    }

    mongoose.connect(mongoURI, {
      dbName: envConfig.DB.DB_NAME,
    });

    logger.info("Database connection successful");
  } catch (error) {
    logger.error(error, "Database connection failed");
  }
};

export default connectDB;
