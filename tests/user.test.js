const request = require("supertest");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const app = require("../src/app");
const User = require("../src/models/user");

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
  name: "Joseph",
  email: "Mutuaj64@gmail.com",
  password: "Gridlock",
  tokens: [
    {
      token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET_TOKEN),
    },
  ],
};

beforeEach(async () => {
  await User.deleteMany();
  await new User(userOne).save();
});

//SIGNUP A USER
test("Should Sign up a new user", async () => {
  await request(app)
    .post("/users")
    .send({
      name: "Joleen",
      email: "jolleen@gmail.com",
      password: "11223344",
    })
    .expect(201);
});

