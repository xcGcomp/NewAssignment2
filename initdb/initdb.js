require("dotenv").config();
const User = require("../models/User");
const Contact = require("../models/Contact");
async function addUserAndContact() {
  var user1 = new User({
    email: "123@gmail.com",
    password: "123qwe",
    username: "123456",
  });
  await user1.save();

  var user2 = new User({
    email: "456@gmail.com",
    password: "123qwe",
    username: "456789",
  });
  await user2.save();

  var user3 = new User({
    email: "1233@gmail.com",
    password: "123qwe",
    username: "098763",
  });
  await user3.save();



  var contact1 =  new Contact({
    email: "123@gmail.com",
    contactName: "hahahaha",
    contactNumber: "1234567890",
    user_id:user1._id
  });
  await contact1.save()

  var contact2 =  new Contact({
    email: "1234@gmail.com",
    contactName: "abcdef",
    contactNumber: "123456732",
    user_id:user2._id
  });
  await contact2.save()

  var contact3 =  new Contact({
    email: "123456@gmail.com",
    contactName: "cbcdefg",
    contactNumber: "1234561232",
    user_id:user3._id
  });
  await contact3.save()


  var contact4 =  new Contact({
    email: "123@gmail.com",
    contactName: "fahahaha",
    contactNumber: "1334567890",
    user_id:user1._id
  });
  await contact4.save()

  var contact5 =  new Contact({
    email: "123ddd4@gmail.com",
    contactName: "qbcdef",
    contactNumber: "333456732",
    user_id:user1._id
  });
  await contact5.save()

  var contact6 =  new Contact({
    email: "12ee456@gmail.com",
    contactName: "mbcdefg",
    contactNumber: "2234561232",
    user_id:user1._id
  });
  await contact6.save()

  console.log("add successfully")
}
addUserAndContact();
