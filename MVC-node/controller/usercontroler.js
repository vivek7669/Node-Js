const User = require("../model/usermodel")

const get1 = async(req,res) => {
    let user = await User.find();
     res.send(user);
}
const post1 = async (req,res) => {
    let user = await User.create(req.body);
     res.status(201).send(user);
}

module.exports = {get1 , post1}