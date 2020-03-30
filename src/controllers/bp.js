const BpService = require("../services/bp-service");

module.exports = {
  async saveUserBp(req, res) {
    try {
      let bp = await BpService.saveUserBp(req);
      res.status(201).send({
        status: "success",
        message: null,
        data: bp
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
  async getBpByUserId(req, res) {
    try {
      let bp = await BpService.getBpByUserId(req);
      res.status(200).send({
        status: "success",
        message: null,
        data: bp
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send({
        status: "fail",
        message: null,
        data: error
      });
    }
  }
};
