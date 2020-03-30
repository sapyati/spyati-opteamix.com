const User = require("../models").User;
const Weight = require("../models").Weight;
const Bp = require("../models").Bp;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

module.exports = {
  createUser(req) {
    return new Promise(function(resolve, reject) {
      User.create(req.body, {
        include: [
          {
            model: Weight,
            as: "weight"
          },
          {
            model: Bp,
            as: "bp"
          }
        ]
      })
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  },
  getUsers() {
    return new Promise(function(resolve, reject) {
      User.findAll({
        include: [
          {
            model: Weight,
            as: "weight"
          },
          {
            model: Bp,
            as: "bp"
          }
        ]
      })
        .then(users => resolve(users))
        .catch(error => reject(error));
    });
  },
  getUserById(req) {
    return new Promise(function(resolve, reject) {
      const today = moment();
      const week_start = today.startOf("week").format("YYYY-MM-DD");
      User.findAll({
        where: { userId: req.query.userId },
        attributes: ["userId", "name", "age", "height"],
        include: [
          {
            model: Weight,
            as: "weight",
            where: {
              createdAt: {
                [Op.gte]: new Date(new Date(week_start))
              }
            },
            required: false
          },
          {
            model: Bp,
            as: "bp",
            where: {
              createdAt: {
                [Op.gte]: new Date(new Date(week_start))
              }
            },
            required: false
          }
        ]
      })
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  },

  getWeeklyBpWeightByUserId(req) {
    return new Promise(function(resolve, reject) {
      User.findAll({
        where: { userId: req.query.userId },
        include: [
          {
            model: Weight,
            as: "weight"
          },
          {
            model: Bp,
            as: "bp",
            group: Sequelize.fn("dayofweek", Bp.sequelize.col("createdAt"))
          }
        ]
      })
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  }
};
