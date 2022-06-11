const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');
mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.ixym8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})


const schema = new mongoose.Schema({
    fname: 'string',
    lname: 'string',
    dob : {
        type : 'date'
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    houseNo : 'number',
    streetName : 'string',
    city : 'string',
    province : 'string',
    postalCode : 'string',
    make : 'Number',
    model : 'string',
    year : 'Number',
    platNo : 'Number',
    licenseNumber : 'Number',
    // image1: 'string',
    // image2: 'string'
});

const connect = mongoose.model('databases',schema)
module.exports = connect