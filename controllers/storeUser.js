const User = require('../models/user.js')
//  import alert from 'alert';
// const path = require('path')
let alert = require('alert')


module.exports = async (req,res)=>{
    const driver = {
        fname : req.body.fname,
        lname : req.body.lname,
        dob : req.body.dob,
        username : req.body.username,
        password : req.body.password,
        userType : req.body.userType,
        
    }
    await User.create(driver, (error,User)=>{
        if(error)
        {
            return res.redirect('/users/signUp')
            alert("Registration Failed ");
        }
        // alert('User Registered Successfully');
        res.redirect('/login')
        alert("Registered Successfully");
    })
}