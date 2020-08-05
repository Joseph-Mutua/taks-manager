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

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5f282350cef5ff2f7a74fdc3", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });

const deleteTaskAndCount = async (id, completed) => {
  const task =  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

deleteTaskAndCount("5f2840fced44a10c52536de0", false)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
