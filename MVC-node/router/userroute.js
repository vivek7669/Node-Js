const { Router } = require("express");
const { get1,post1 } = require("../controller/usercontroler");
const userchecking = require("../middleware/usermidelware");

const userroute = Router();

userroute.get("/",get1);
userroute.post("/",userchecking,post1);

module.exports = userroute;

