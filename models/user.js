const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');

// mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.ixym8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})

const userSchema = new Schema({
    fname : "string",
    lname : String,
    dob : String,
    examType : { 
        type : String, 
        default : null
    },
    examStatus : {
        type : String,
        default : null
    },
    username:{
        type: String,
        required: [true,'Please provide Username'],
        unique: true
    } ,
    password: {
        type: String,
        required: [true, 'Please provide Password']
    },
    userType: {
        type: String,
        required: true
    },
    appointment_id : {
        type: mongoose.Schema.Types.ObjectId,
        // ref : 'tbl_app',
        // default : null
    },
    examBooked : Boolean,
    examComplete : Boolean


});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', function(next){
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) =>{
        user.password = hash
        next()
    })
})


const User = mongoose.model('users',userSchema);
module.exports = User;