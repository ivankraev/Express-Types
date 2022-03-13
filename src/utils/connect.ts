import mongoose from "mongoose";
import config from "config";
import logger from "./logger";
async function connect() {
  const dbUri = config.get<string>("dbUri");
  return mongoose
    .connect(dbUri)
    .then(() => {
      logger.info("db connected");
    })
    .catch((e) => {
      logger.error("Cannot connect to db");
      process.exit(1);
    });
}

export default connect;
