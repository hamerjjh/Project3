require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { UserModel, MoveModel, LocationModel } = require('./schema')


const dome = new MoveModel({description: "Visit the new Mercedes Benz Stadium", completed: false})
const coke = new MoveModel({description: "Take a tour of the World of Coke", completed: false,})
const varsity = new MoveModel({description: "Eat at the varsity", completed: false,})
const fish = new MoveModel({description: "Explore the Georgia Aquarium", completed: false,})

const bean = new MoveModel({description: "Take a picture in front of the bean", completed: false})
const pizza = new MoveModel({description: "Get a slice of deep dish pizza", completed: false,})
const tower = new MoveModel({description: "Go to the top of Willis Tower", completed: false,})
const navy = new MoveModel({description: "See fireworks at the Navy Pier", completed:false,})

const bell = new MoveModel({description: "Tour Independence Hall and see the Liberty Bell", completed: false})
const cheesesteak = new MoveModel({description: "Grab a cheesesteak", completed: false,})
const art = new MoveModel({description: "Run up the steps of the Art Museum", completed: false,})
const family = new MoveModel({description: "Remember to see niece and nephew", completed: false,})

const moves = [dome, coke, varsity, fish]
const moves2 = [bean, pizza, tower, navy]
const moves3 = [bell, cheesesteak, art, family]

const atlanta = new LocationModel({city: "Atlanta", state:"GA", moves:moves})
const chicago = new LocationModel({city: "Chicago", state:"IL", moves: moves2})
const philadelphia = new LocationModel({city: "Philadelphia", state: "PA", moves:moves3})

const locations = [atlanta, chicago, philadelphia]


const jonathan = new UserModel({userName: 'Jonathan H', email: 'jonathan@gmail.com', locations: locations})

UserModel.remove({})
  .then(() => jonathan.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())