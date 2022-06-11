const connect = require('../models/connection.js')

modeule.exports = async(req,res)=>{
    const con = await connect.findById(req.param.id)
    res.render('G',{
        con
    })
}