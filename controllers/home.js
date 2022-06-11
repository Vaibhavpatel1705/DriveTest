const res = require('express/lib/response')
const connect = require('../models/connection.js')

module.exports = async(req,res)=>{
    const con = await connect.find({});
    // console.log(req.session)
    res.render('index',{
        con
    })
}  