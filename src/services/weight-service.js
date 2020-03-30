const Weight = require("../models").Weight;
module.exports = {
  saveWeight(req) {
    return new Promise(function(resolve, reject) {
      Weight.create(req.body)
        .then(weight => resolve(weight))
        .catch(error => reject(error));
    });
  },

  getWeightByUserId(req) {
    return new Promise(function(resolve, reject) {
      Weight.findAll({
        where: {
          userId: req.query.userId
        }
      })
        .then(weight => resolve(weight))
        .catch(error => reject(error));
    });
  },

  updateUserWeight(req) {
    return new Promise(function(resolve, reject) {
      Weight.update(
        {
          weightValue: req.body.weightValue,
          weightUnit: req.body.weightUnit
        },
        {
          returning: true,
          where: {
            userId: req.body.userId,
            weightId: req.body.weightId
          }
        }
      )
        .then(weight => resolve(weight))
        .catch(error => reject(error));
    });
  },

  deleteUserWeight(req) {
    return new Promise(function(resolve, reject) {
      Weight.destroy({
        returning: true,
        where: {
          userId: req.body.userId,
          weightId: req.body.weightId
        }
      })
        .then(rowDeleted => {
          if (rowDeleted === "1" || rowDeleted === 1) {
            message = `Weight deleted: ${rowDeleted}`;
          } else {
            message = "Weight already deleted";
          }
          resolve(message);
        })
        .catch(error => reject(error));
    });
  }
};
