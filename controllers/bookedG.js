const User = require('../models/user.js')
const tbl_app = require('../models/appointment.js');

module.exports = async (req,res)=>{

    const {appointment_appid,date,time,location} = req.body;
    console.log(req.body)

    const user = await User.findOneAndUpdate(req.session.uname, {
        appointment_id : appointment_appid,
        examType : "G",
        examBooked : 'true',
        examComplete : 'false'
    });

    await tbl_app.findOneAndUpdate(
        {_id : appointment_appid},
        {
            isTimeSlotAvailable : 'false',
        }
    );

    return res.render("G",{
        user:user,
        driver : true,
        isAppBooked : true,
        app_details : req.body
    });
    
}