const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const Admin = require("../models").Admin;
const config = require("../config/config.json");

const authenticate = params => {
  return Admin.findOne({
    where: {
      userName: params.userName
    },
    raw: true
  }).then(admin => {
    if (!admin) throw new Error("Authentication failed. Admin not found.");
    if (!bcrypt.compareSync(params.password || "", admin.password))
      throw new Error("Authentication failed. Wrong password.");
    const payload = {
      userName: admin.userName,
      time: new Date()
    };
    var token = jwt.sign(payload, config.jwtSecret, {
      expiresIn: config.tokenExpireTime
    });
    return token;
  });
};

module.exports = {
  authenticate
};
