const User = require('../models/user')

module.exports = async (req,res)=>{

    const {appointment_id,examStatus} = req.body;
    console.log(req.body)

    const user = await User.findOneAndUpdate(appointment_id,{
        examStatus : examStatus,
        examComplete : 'true'
    });

    res.render('examiner',{examiner : true});
}
