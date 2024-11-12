const mongoose = require("mongoose");

const dburl =
  "mongodb+srv://Yehara:S123@cluster0.y694y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true, "userNewUrlParser", true);

const connection = async () => {
  try {
    await mongoose.connect(dburl);
    console.log("MongoDB Connected~");
  } catch (e) {
    console.error(e.message);
    process.exit();
  }
};

module.exports = connection;
