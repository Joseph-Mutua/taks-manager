const request = require("supertest");
const Task = require("../src/models/task");
const app = require("../src/app");
const {
  userOneId,
  userOne,
  userTwoId,
  userTwo,
  taskOne,
  taskTwo,
  taskThree,
  setupDatabase,
} = require("./fixtures/db");

beforeEach(setupDatabase);

//SHOULD CREATE TASK FOR USER
test("Should create task for user", async () => {
  const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "From my test",
    })
    .expect(201);
  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
  expect(task.completed).toEqual(false);
});

//SHOULD FETCH USER TASKS
test("Should fetch user tasks", async () => {
  const response = await request(app)
    .get("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200);
  expect(response.body.length).toEqual(1);
});

//SHOULD NOT DELETE OTHER USERS TASKS
test("Should ot delete other users tasks", async () => {
  const response = await request(app)
    .delete(`/tasks/${taskOne._id}`)
    .set("Authorization", `Bearer ${userTwo._id}`)
    .send()
    .expect(401);
  const task = Task.findById(taskOne._id);
  expect(task).not.toBeNull();
});
