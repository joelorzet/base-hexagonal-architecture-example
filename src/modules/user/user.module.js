const { app } = require("../../config/config.js");
const { userController } = require("./controllers/user.controller.js");
const { checkValidUser } = require("./user.middleware.js");

app.get(`/${userController.BASE_PATH}`, userController.index);
app.get(
  `/${userController.BASE_PATH}/:id`,
  checkValidUser,
  userController.getUser
);
app.post(`/${userController.BASE_PATH}`, userController.createUser);

module.exports = { app };
