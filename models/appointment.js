const mongoose = require('mongoose')
const appointment = mongoose.Schema;

mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.ixym8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})

const app = new appointment({
    date: 'string',
    time: 'string',
    location: 'string',
    examType:'string',
    isTimeSlotAvailable : Boolean
})

const tbl_app = mongoose.model('appointment', app);
module.exports = tbl_app;