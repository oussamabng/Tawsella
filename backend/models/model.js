const mongoose = require("mongoose");
const multer = require("multer");
const testSchema = new mongoose.Schema({
    name:String
})
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 50,
    minlength: 5,
    required: [true, "username is required."],
    unique: true
  },
  fullname: {
    type: String,
    required: [true, "fullname is required."],
    maxlength: 50,
    minlength: 5
  },
  password: {
    type: String,
    required: [true, "password is required."],
    maxlength: 255,
    minlength: 5
  },
  gender: {
    type: String,
    enum: ["Male", "Female"]
  },
  birthday: {
    type: Date,
    default: Date.now()
  },
 
  image: {
    type: Buffer,
    contentType: String
  },
  phone: {
    type: String
  },
  address: {
    city: String,
    wilaya: String,
    zip: Number
  },
  ccp: {
    type: Number,
    required: [true, "ccp code is required"]
  },
  is_driver: {
    type: Boolean,
    required: true
  }
});

const ObjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required."],
    minlength: 4,
    maxlength: 25
  },
  number: {
    type: Number,
    default: 1
  },
  destination_from: {
    city: String,
    wilaya: String,
    zip: Number
  },
  destination_to: {
    city: String,
    wilaya: String,
    zip: Number
  },
  category: {
    type: String,
    enum: ["Phone", "Desktop", "Document", "Clothes", "luggage", "Other"]
  },
  dimension: {
    width: Number,
    height: Number,
    weight: Number
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  oid: {
    type: mongoose.Schema.Types.ObjectId,
    unique: true
  }
});
const User = mongoose.model("User", UserSchema);
const Objects = mongoose.model("Object", ObjectSchema);

const Test = mongoose.model("Test", testSchema);

module.exports.User = User;
module.exports.Objects = Objects;
module.exports.Test = Test;
