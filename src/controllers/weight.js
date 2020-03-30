const WeightService = require("../services/weight-service");

module.exports = {
  async saveUserWeight(req, res) {
    try {
      let weight = await WeightService.saveWeight(req);
      res.status(201).send({
        status: "success",
        message: null,
        data: weight
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send({
        status: "fail",
        message: null,
        data: error
      });
    }
  },

  async getWeightByUserId(req, res) {
    try {
      let weight = await WeightService.getWeightByUserId(req);
      res.status(200).send({
        status: "success",
        message: null,
        data: weight
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send(error);
    }
  },

  async updateUserWeight(req, res) {
    try {
      let weight = await WeightService.updateUserWeight(req);
      res.status(200).send({
        status: "success",
        message: null,
        data: weight
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send(error);
    }
  },

  async deleteUserWeight(req, res) {
    try {
      let message = await WeightService.deleteUserWeight(req);
      res.status(200).send({
        status: "delete success",
        message: message,
        data: null
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send(error);
    }
  }
};
