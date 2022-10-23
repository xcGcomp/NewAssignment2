const Contact = require("../models/Contact");
module.exports = {
  async listview(req, res) {
    res.render("contactlist");
  },
  async list(req, res) {
    const user = req.user;
    console.log(user.user_id,99999)
    const contacts = await Contact.find({
      user_id: user.user_id,
    }).sort({ contactName: 1 });
    res.status(200).send({
      code: 1,
      contacts,
    });
  },
  async deleteRecord(req, res) {
    const user = req.user;
    const id = req.params.id;
    await Contact.deleteOne({
      _id: id,
      user_id: user.user_id,
    });
    res.send({ code: 1, msg: "success" });
  },
  async updateRecord(req, res) {
    const user = req.user;
    const { email, contactName, contactNumber } = req.body;
    const id = req.params.id;
    try {
      const contact = await Contact.findOne({
        _id: id,
        user_id: user.user_id,
      });
      contact.email = email;
      contact.contactName = contactName;
      contact.contactNumber = contactNumber;
      await contact.save();
      res.send({ code: 1, msg: "success" });
    } catch (err) {
      res.send({ code: 1, msg: "failed" });
    }
  },
  async updateview(req, res) {
    const id = req.params.id;
    res.render("contactupdate", { id });
  },
  async getRecorecd(req, res) {
    const user = req.user;
    const id = req.params.id;
    const contact = await Contact.findOne({
      _id: id,
      user_id: user.user_id,
    });
    res.status(200).send({
      code: 1,
      contact,
    });
  },
};
