const request = require("supertest");
const app = require("../src/app");

beforeEach(() => {
  console.log("BeforeEach");
});

afterEach(() => {
  console.log("afterEach");
});

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
