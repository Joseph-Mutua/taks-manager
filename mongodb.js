//CRUD Create Read Update

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

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

    // db.collection("users").insertOne(
    //   {
    //     name: "Mutua",
    //     age: 22,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert User");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Kamwana",
    //       age: 24,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "Do Laundry",
          completed: true,
        },
        {
          description: "Daily Reading",
          completed: true,
        },
        {
          description: "Daily workout",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Tasks Not Inserted!");
        }
        console.log(result.ops);
      }
    );
  }
);
