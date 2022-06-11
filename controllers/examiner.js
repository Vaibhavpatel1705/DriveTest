const connect = require('../models/connection.js')
const tbl_app = require('../models/appointment.js')

const User = require('../models/user.js')

module.exports = async(req,res)=>{
    const con = await connect.find({})

   
    const bookedG2 = await User.where("examType").equals("G2");

    const bookedG = await User.where("examType").equals("G");


    // const bookedG = await User.find({_id : req.session.id}).where("examType").equals("G").where("examBooked").equals("true");

    res.render('examiner',{examiner : true,bookedG : bookedG, bookedG2 : bookedG2})
}