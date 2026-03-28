import { configDotenv } from "dotenv";
import app from "./src/app.js";
import connectDB from "./src/common/config/db.js";
import dotenv from "dotenv";

configDotenv({ path: "./src/.env" });
// dotenv.config({ path: "./src/.env" });

const PORT = process.env.PORT || 3000;

const start = async () => {
  //connect to database
  await connectDB();
  //start server
  app.listen(PORT, () => {
    console.log(
      `Server is running on port ${PORT} in ${process.env.NODE_ENV} mode`,
    );
  });
};



start().catch((error) => {
  console.error(error);
  process.exit(1);
});
