const User = require('../models/user.js')

module.exports = async(req,res,next)=>{
    if(req.session.userId){
        const user = await User.findOne({_id : req.session.userId});

        if(req.session.userType === "admin"){
            return res.render("/", {username: user.username , admin : "true"});
        }
        else if(req.session.userType === "examiner"){
            return res.render("/", {username: user.username , examiner : "true"});
        }
        else{
            return res.render("/", {username: user.username , driver : "true"});
        }
    }
    else{
        next();
    }
};