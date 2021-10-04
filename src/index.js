const express = require("express");
require("./db/mongoose");
const Task = require("./models/task");
const User = require("./models/user");
const useRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(useRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port" + port);
});
