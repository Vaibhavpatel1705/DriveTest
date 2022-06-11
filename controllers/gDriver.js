
const tbl_app = require('../models/appointment.js')

module.exports = async (req,res)=>{
    const {date,examType} = req.body;
    const gTests = await  tbl_app.find({date:date}).where("examType").equals("G").where("isTimeSlotAvailable").equals("true");

    res.render("G" , {gTest : gTests, driver : true});
    
}