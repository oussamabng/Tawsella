const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/model");
var bcrypt = require('bcryptjs');
const config = require("config");
const Joi = require("joi");

router.post("/signup", async (req, res) => {
  try {
    const { fullname, username, password, city, zip, phone, ccp } = req.body;

    const user = new User({
      username: username,
      fullname: fullname,
      is_driver: false,
      zip: zip,
      phone: phone,
      ccp: ccp
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    const token = jwt.sign({ _id: user._id }, config.get("jwtPrivateKey"));
    console.log(token);
    res
      .status(200)
      .header("x-auth-token", token)
      .send(token);
  } catch (error) {
    res.send('error')
  }
 
});


router.post("/login", async (req, res) => {
  console.log("sss")
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const bndm = await User.findOne({ username: req.body.username });

  if (!bndm) return res.status(400).send("Invalid username or password ");

  const validPassword = await bcrypt.compare(req.body.password, bndm.password);

  if (!validPassword) return res.status(400).send("Invalid email or password ");
  else {
    const token = jwt.sign({ _id: bndm._id }, config.get("jwtPrivateKey"));
    //store.set("token", { token: token });

    res
      .status(200)
      .header("x-auth-token", token)
      .send({ token: token });
  }
});

function validateUser(user) {
  const schema = {
    username: Joi.string()
      .min(5)
      .max(255)
      .required(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
  };
  return Joi.validate(user, schema);
}

module.exports = router;
