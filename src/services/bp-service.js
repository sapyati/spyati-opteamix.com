const Bp = require("../models").Bp;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");
module.exports = {
  saveUserBp(req) {
    return new Promise(function(resolve, reject) {
      Bp.create(req.body)
        .then(bp => resolve(bp))
        .catch(error => reject(error));
    });
  },
  getBpByUserId(req) {
    return new Promise(function(resolve, reject) {
      const startdate = moment()
        .subtract(7, "days")
        .format("YYYY-MM-DD");
      Bp.findAll({
        where: {
          userId: req.query.userId,
          createdAt: {
            [Op.gte]: new Date(new Date(startdate))
          }
        }
      })
        .then(bp => resolve(bp))
        .catch(error => reject(error));
    });
  }
};
