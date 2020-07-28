//CRUD Create Read Update

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("users").findOne({ name: "Mutua" }, (error, user) => {
      if (error) {
        console.log("Unable to fetch!");
      }
      console.log(user);
    });
  }
);
