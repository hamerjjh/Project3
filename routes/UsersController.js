const express = require('express')
const router = express.Router()
const { UserModel } = require('../db/schema')

router.get('/', async (req, res) => {
  try {
    const users = await UserModel.find({})
    res.json(users)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
      console.log('route hit' + req.params.id)
    const user = await UserModel.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})

//Create
router.post('/', async (req, res) => {
  try {
    const newUser = new UserModel(req.body.user)
    const saved = await newUser.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})

//Update
router.patch('/:id', async (req, res) => {
    try {
        const updatedUser = req.body.user
        const user = await UserModel.findById(req.params.userId)
        user.userName = updatedUser.userName
        user.email = updatedUser.email
        const saved = await user.save()
        res.json(saved)
    } catch (err) {
        res.send(err)
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        const userId =req.params.id;
        const deleted = await UserModel.findByIdAndRemove(userId)
        res.json(deleted)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router