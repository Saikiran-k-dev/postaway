import app from "./index.js"
import { connectToMongoDb } from "./src/config/mongoDb.js";
import { connectUsingMongoose } from "./src/config/mongoose.js";

app.listen(3000, () => {
    // connectToMongoDb()
    connectUsingMongoose()
    console.log("server is listening at port 3000");
  });
  