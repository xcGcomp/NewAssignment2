const mongoose = require("../database/mongodb");
const documentSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function(v) {
          return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(v);
        },
        message: props =>  props.value+" not valid email!"
      },
      required: [true, "must have email"],
      minlength: 2,
      maxlength: 100
    },
    username:{
      type: String,
      unique: true,
      required: [true, "must have username"],
      minlength: 6,
      maxlength: 20
    },
    password: {
      type: String,
      required: [true, "must have password"]
    },
    create_date: {
      type: Date,
      default: Date.now
    },
    token: { type: String }
  });
  const User = mongoose.model('User', documentSchema);
  module.exports = User