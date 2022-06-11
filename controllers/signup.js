const User = require('../models/user.js')

module.exports = async(req,res)=>{

    var username = ""
    var password = ""
    const data = req.flash('data')[0];

    if(typeof data != "undefined")
    {
        username = data.username;
        password = data.password; 
    }
    
    res.render('signUp',{
        // errors : req.session.validationError
        errors: req.flash('validationError'),
        username : username,
        password : password,
        success:''
    })
}