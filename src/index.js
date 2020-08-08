const express = require("express");
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const jwt = require("jsonwebtoken");

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});

//const Task = require("./models/task")

const main = async () => {
  // const task = await Task.findById("5f2f1aaf18208d6a220f4dd9");
  // await task.populate("owner").execPopulate()
  // console.log(task.owner)

  const user = await User.findById("5f2f171e6a687f67b4e7ecb3");
  await user.populate("tasks").execPopulate()
  console.log(user.tasks)
}
main()
