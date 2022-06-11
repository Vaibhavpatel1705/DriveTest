const User = require('../models/user.js')

module.exports = async(req,res)=>{

    var u = req.session.userId;

    const result = await User.where("examStatus").equals("Pass").where("_id").equals(u);

    res.render('driverHome' , {driver : true,result : result})
    
    

}