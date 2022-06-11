const connect = require('../models/connection.js')

module.exports = async(req,res)=>{
    res.render('G2',{driver : true})

    // connect.create(req.body,(error, con)=>{
    //     res.redirect('/')
    // })
}