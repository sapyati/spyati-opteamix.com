const UsersService = require("../services/users-service");

module.exports = {
  async create(req, res) {
    try {
      let user = await UsersService.createUser(req);
      res.status(201).send({
        status: "success create createUser",
        message: null,
        data: user
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

  async list(req, res) {
    try {
      let users = await UsersService.getUsers();
      res.status(200).send({
        status: "success list getUsers",
        message: null,
        data: users
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send(error);
    }
  },

  async getUserById(req, res) {
    try {
      let user = await UsersService.getUserById(req);
      res.status(200).send({
        status: "success getUserById getUserById",
        message: null,
        data: user
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send(error);
    }
  },

  async getWeeklyBpWeightByUserId(req, res) {
    try {
      let user = await UsersService.getWeeklyBpWeightByUserId(req);
      res.status(200).send({
        status: "success getWeeklyBpWeightByUserId",
        message: null,
        data: user
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send(error);
    }
  }
};
