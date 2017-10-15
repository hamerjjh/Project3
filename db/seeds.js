require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { UserModel, MoveModel, LocationModel } = require('./schema')

const atlanta = new LocationModel({city: "Atlanta", state:"GA",})
const chicago = new LocationModel({city: "Chicago", state:"IL",})
const philadelphia = new LocationModel({city: "Philadelphia", state: "PA",})

const dome = new MoveModel({description: "Visit the new Mercedes Benz Stadium", completed:""})
const coke = new MoveModel({description: "Take a tour of the World of Coke", completed:"",})
const varsity = new MoveModel({description: "Eat at the varsity", completed:"",})
const fish = new MoveModel({description: "Explore the Georgia Aquarium", completed:"",})

const bean = new MoveModel({description: "Take a picture in front of the bean", completed:""})
const pizza = new MoveModel({description: "Get a slice of deep dish pizza", completed:"",})
const tower = new MoveModel({description: "Go to the top of Willis Tower", completed:"",})
const navy = new MoveModel({description: "See fireworks at the Navy Pier", completed:"",})

const bell = new MoveModel({description: "Tour Independence Hall and see the Liberty Bell", completed:""})
const cheesesteak = new MoveModel({description: "Grab a cheesesteak", completed:"",})
const art = new MoveModel({description: "Run up the steps of the Art Museum", completed:"",})
const family = new MoveModel({description: "Remember to see niece and nephew", completed:"",})


const locations = [atlanta, chicago, philadelphia]
const moves = [dome, coke, varsity, fish]
const moves2 = [bean, pizza, tower, navy]
const moves3 = [bell, cheesesteak, art, family]

const jonathan = new UserModel({userName: 'Jonathan H', email: 'jonathan@gmail.com',})

UserModel.remove({})
  .then(() => jonathan.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())