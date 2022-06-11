const express = require('express')
const app = express()
const ejs = require('ejs')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const flash = require('connect-flash');
const expressSession = require('express-session');
app.use(expressSession({
    secret: 'keyboard cat'
}))

const appointment = require('./models/appointment.js')

const homeController = require('./controllers/home')

const driverHomeController = require('./controllers/driverHome')
const gController = require('./controllers/g')
const g2Controller = require('./controllers/g2')
const g2DriverController = require('./controllers/g2Driver')
const viewGAppointment = require('./controllers/gDriver')

const G2appointmentBookedController = require('./controllers/bookedG2')
const GappointmentBookedController = require('./controllers/bookedG')

const loginController = require('./controllers/login')
const loginUserController = require("./controllers/loginUser")
const logoutController = require('./controllers/logout')

const signController = require('./controllers/signup')
const storeUserController = require('./controllers/storeUser')

const adminController = require('./controllers/admin')
const addG2SlotController = require('./controllers/addG2Slots')
const GslotController = require('./controllers/GSlot')
const addGSlotController = require('./controllers/addGSlots')
const getResultController = require('./controllers/viewResult')
const examinerController = require('./controllers/examiner')
const updateG2Controller = require('./controllers/updateG2')
const updateGController = require('./controllers/updateG')


const authMiddleware = require('./middleware/authMiddleware');


global.loggedIn = null;
app.use("*", (req,res, next)=>{
    loggedIn = req.session.userId;
    next()
})

app.use(flash())

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(fileUpload())

app.listen(4000, ()=>{
    console.log("App running on port 4000");
})

mongoose.connect('mongodb+srv://vaibhav:vaibhav@cluster0.ixym8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true})

app.get('/',homeController)

app.get('/driverHome',authMiddleware,driverHomeController)
app.get('/G',authMiddleware,gController)
app.get('/G2',authMiddleware,g2Controller)
app.post('/view/app', authMiddleware ,g2DriverController)
app.post('/search/app',authMiddleware,viewGAppointment)

app.post('/app/book',G2appointmentBookedController)
app.post('/view/G',GappointmentBookedController)


app.get('/login',loginController)
app.post("/auth/login",loginUserController);
app.get('/auth/logout',logoutController)


app.get('/signUp',signController)
app.post("/users/signUp",storeUserController);


app.get('/admin',authMiddleware,adminController)
app.post('/add/appointment',authMiddleware,addG2SlotController)
app.get('/Gslot' ,authMiddleware,GslotController)
app.post('/add/g',addGSlotController)
app.get('/viewResult',authMiddleware,getResultController)

app.get('/examiner',authMiddleware,examinerController)
app.post('/updateG2', updateG2Controller)
app.post('/updateG', updateGController)


app.use((req,res)=>{
    res.render('notFound')
})