const Admin = require("../models").Admin;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

module.exports = {
  createAdmin(adminData) {
    console.log(adminData);
    return new Promise(function(resolve, reject) {
      Admin.create(adminData)
        .then(admin => resolve(admin))
        .catch(error => reject(error));
    });
  },
  getAdminByUserName(req) {
    console.log(req);
    return new Promise(function(resolve, reject) {
      Admin.findAll({
        where: { userName: req }
      })
        .then(admin => resolve(admin))
        .catch(error => reject(error));
    });
  }
};
