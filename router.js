"use strict";

module.exports = function (app) {
  var controller = require("./controller");

  app.route("/").get(controller.index);
  app.route("/getAllUser").get(controller.getAllUser);
  app.route("/getUserById/:id").get(controller.getUserById);
  app.route("/addUser").post(controller.addUser);
  app.route("/editUser").put(controller.editUser);
};
