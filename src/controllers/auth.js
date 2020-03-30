const bcrypt = require("bcrypt-nodejs");
const config = require("../config/config.json");
const authService = require("../services/auth-service");
const adminService = require("../services/admin-service");

function loginAdmin(req, res) {
  return authService
    .authenticate(req.body)
    .then(token => {
      res.send({
        success: true,
        data: { token }
      });
    })
    .catch(err => {
      res.send({
        success: false,
        message: err.message
      });
    });
}

function registerAdmin(req, res) {
  var userName = req.body.userName;
  return adminService.getAdminByUserName(userName || "").then(exists => {
    console.log("exists", exists.length);
    if (exists.length) {
      console.log("inside if block");
      return res.send({
        success: false,
        message:
          "Registration failed. Admin with this email already registered."
      });
    }
    const admin = {
      userName: userName,
      password: bcrypt.hashSync(
        req.body.password,
        bcrypt.genSaltSync(config.saltRounds)
      )
    };
    return adminService
      .createAdmin(admin)
      .then(() => res.send({ success: true }));
  });
}

module.exports = {
  loginAdmin,
  registerAdmin
};
