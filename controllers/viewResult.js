const connect = require('../models/connection.js')
const User = require('../models/user')

module.exports = async(req,res)=>{
    const con = await connect.find({})

    const resultG2 = await User.where("examType").equals("G2").where("examBooked").equals("true").where("examComplete").equals("true");

    const resultG = await User.where("examType").equals("G").where("examBooked").equals("true").where("examComplete").equals("true");


    res.render('viewResult', {admin : true,resultG2 : resultG2, resultG : resultG})
}