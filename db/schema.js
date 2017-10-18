const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovesSchema = new Schema({
    description: {
        type: String,
        default: 'New Idea Description'
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const LocationsSchema = new Schema({
    city: {
        type: String,
        default: 'city'
    },
    state: {
        type: String,
        default: "state"
    },
    moves: [MovesSchema]
})

const UserSchema = new Schema({
    userName: {
        type: String,
    },
    email: {
        type: String,
    },
    locations: [LocationsSchema]
})


const UserModel = mongoose.model('User', UserSchema)
const MoveModel = mongoose.model('Move', MovesSchema)
const LocationModel = mongoose.model('Location', LocationsSchema)

module.exports = {
    UserModel: UserModel,
    MoveModel: MoveModel,
    LocationModel: LocationModel
}