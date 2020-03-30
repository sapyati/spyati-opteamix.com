const AdminService = require("../services/admin-service");

module.exports = {
  async createAdmin(req, res) {
    if (!req.body.userName || !req.body.password) {
      return res.status(400).send({
        status: "fail",
        message: null
      });
    }
    try {
      let admin = await AdminService.createAdmin(req);
      res.status(201).send({
        status: "success create createAdmin",
        message: null,
        data: admin
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

  async adminLogin(req, res) {
    const { userName, password } = req.query;
    if (!userName || !password) {
      return res.status(400).send("Request missing userName or password param");
    }
    try {
      let admin = await AdminService.adminLogin(req);
      res.status(200).send({
        status: "success",
        message: null,
        data: admin
      });
    } catch (error) {
      console.log("inside error block" + error);
      res.status(400).send({
        status: "fail",
        message: "invalid username or password",
        data: error
      });
    }
  }
};
