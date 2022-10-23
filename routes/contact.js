const {
  listview,
  list,
  deleteRecord,
  updateRecord,
  updateview,
  getRecorecd
} = require("../controller/contact");
const { checkLogin } = require("../middleware/verifySignup");
module.exports = function (app) {
  app.route("/contact/list").get(listview);
  app.route("/contact/get/:id").get(checkLogin,getRecorecd);
  app.route("/contact/lists").get(checkLogin, list);
  app.route("/contact/delete/:id").delete(checkLogin, deleteRecord);
  app.route("/contact/update/:id").put(checkLogin, updateRecord);
  app.route("/contact/update/:id").get(updateview);
};
