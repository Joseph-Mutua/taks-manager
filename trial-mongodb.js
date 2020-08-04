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

    //CREATE DATABASE DOCUMENTS

    db.collection("users").insertOne(
      {
        name: "Andrew",
        age: 27,
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert user!");
        }
        console.log(result.ops);
      }
    );

    db.collection("users").insertMany(
      [
        {
          name: "Kuria",
          age: 23,
        },
        {
          name: "Gunther",
          age: 37,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert User!");
        }
        console.log(result.ops);
      }
    );

    //READ DATABASE COLLECTIONS

    db.collection("users").findOne({ name: "Mutua" }, (error, user) => {
      if (error) {
        console.log("Unable to fetch!");
      }
      console.log(user);
    });

    db.collection("users")
      .find({ age: 22 })
      .toArray((error, users) => {
        console.log(users);
      });

    db.collection("users")
      .find({ age: 22 })
      .count((error, count) => {
        console.log(count);
      });

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

    //UPDATE DATABASE DOCUMENTS

    db.collection("users")
      .updateOne(
        { _id: new ObjectID("5f20767620b3bf4828aa3ab3") },
        {
          $inc: {
            age: 1,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("tasks")
      .updateMany({ completed: true }, { $set: { completed: false } })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    //DELETE COLLECTIONS

    db.collection("users")
      .deleteMany({
        age: 28,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    db.collection("tasks")
      .deleteOne({
        _id: new ObjectID("5f208700a5c02951953565b3"),
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
