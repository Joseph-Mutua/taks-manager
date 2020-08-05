require("../src/db/mongoose");
const User = require("../src/models/user");
const Task = require("../src/models/task");

User.findByIdAndUpdate("5f29a2532f6adc1e024d2721", { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

Task.findByIdAndDelete("5f299d9220619a1a54f63e08")
  .then((result) => {
    console.log(result);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
