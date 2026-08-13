import app from "./app.js";
import connectDB from "./db/db.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });

/*const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error:", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log("app is listening on port of env");
    });
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
})();*/
