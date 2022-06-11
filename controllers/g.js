const connect = require('../models/connection.js')

module.exports = async(req,res)=>{
    res.render('G',{driver : true})

}
