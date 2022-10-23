const { login,loginView,check} = require("../controller/signup");
const {checkLogin} = require("../middleware/verifySignup");
module.exports = function (app) {
  app.route("/auth/login").post(login);
  app.route("/auth/login").get(loginView);
  app.route("/auth/check").get(checkLogin,check);
};
