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

    // db.collection("users").findOne({ name: "Mutua" }, (error, user) => {
    //   if (error) {
    //     console.log("Unable to fetch!");
    //   }
    //   console.log(user);
    // });

    // db.collection("users")
    //   .find({ age: 22 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("users")
    //   .find({ age: 22 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    db.collection("tasks").findOne(
      { _id: new ObjectID("5f2086424f0407515d236f89") },
      (error, task) => {
        if (error) {
          return console.log("Unable to Fetch!");
        }
        console.log(task);
      }
    );

    db.collection("tasks")
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
