const tbl_app = require('../models/appointment.js')

module.exports = async (req,res)=>{

    const appointment = {
        date  : req.body.date,
        time : req.body.time,
        location : req.body.location,
        examType : "G",
        isTimeSlotAvailable : 'true'

    }

    await tbl_app.create(appointment , (error,tbl_app)=>{
        if(error)
        {
            // const validationError = Object.keys(error,errors).map(key => error.errors[key].message)

            // req.flash('validationError', validationError)
            // req.flash('data', req.body)
            
            return res.redirect('/add/g')
        }
        
        res.redirect('/admin')
    })
}