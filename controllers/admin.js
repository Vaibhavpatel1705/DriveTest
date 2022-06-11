const connect = require('../models/connection.js')

module.exports = async(req,res)=>{
    const con = await connect.find({})

    res.render('admin', {admin : true})
}