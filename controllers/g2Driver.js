
const tbl_app = require('../models/appointment.js')

module.exports = async (req,res)=>{
    const {date,examType} = req.body;
    const g2Tests =await  tbl_app.find({date:date}).where("examType").equals("G2").where("isTimeSlotAvailable").equals("true");

    res.render("G2" , {g2Test : g2Tests, driver : true});
    
}