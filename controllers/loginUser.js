const bcrypt = require('bcrypt')
const User = require('../models/user.js')
let alert = require('alert')

module.exports = (req,res)=>{
    const {username, password} = req.body;

    User.findOne({username:username},(error,user)=>{
        if(user.userType == "Driver" || user.userType == "driver")
        {
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same)
                {
                    req.session.userId = user._id;
                    req.session.userType = user.userType;
                    req.session.uname = user.username;
                    
                    res.redirect('/driverHome')
                    alert("Login Successful - Welcome Driver");
                }
                else
                {
                    res.redirect('/auth/login')
                    alert("Login Failed");
                }
            })
        }
        else if (user.userType == "Admin") {
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same)
                {
                    req.session.userId = user._id
                    // req.session.userType = user.userType
                    res.redirect('/admin')
                    alert("Login Successful - Welcome Admin ");
                }
                else
                {
                    res.redirect('/auth/login')
                    alert("Login Failed ");
                }
            })
        } 
        else if(user.userType == "Examiner")
        {
            bcrypt.compare(password, user.password, (error,same)=>{
                if(same)
                {
                    req.session.userId = user._id
                    // req.session.userType = user.userType
                    res.redirect('/examiner')
                    alert("Login Successful - Welcome Examiner");
                }
                else
                {
                    res.redirect('/auth/login')
                    alert("Login Failed");
                }
            })
        }
        else{
            res.redirect('/auth/login')
            alert("Login Failed ");
        }
    })
} 