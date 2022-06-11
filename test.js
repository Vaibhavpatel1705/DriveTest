const express = require('express')
const mongoose = require('mongoose')
const connect = require('./models/connection')

mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.ixym8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})
