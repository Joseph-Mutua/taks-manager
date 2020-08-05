require("../src/db/mongoose");
const User = require("../src/models/user");

//5f282350cef5ff2f7a74fdc3

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

  
