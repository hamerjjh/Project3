const express = require('express')
const router = express.Router({mergeParams: true})
const { UserModel, LocationModel } = require('../db/schema')

router.post('/', async (req, res) => {
  try{
    const newLocation = new LocationModel()
    const user = await UserModel.findById(req.params.userId)
    user.locations.push(newLocation)
    const saved = await user.save()
    res.send(saved)
  } catch (err) {
      res.send(err)
  }
  
})

router.patch('/:id', async (req, res) => {
  const updatedLocation = req.body.location
  const user = await UserModel.findById(req.params.userId)
  const location = user.locations.id(req.params.id)

  location.city = updatedLocation.city
  location.state = updatedLocation.state

  const saved = await user.save()
  res.json(saved)
})

router.delete('/:id', async (req, res) => {

  const user = await UserModel.findById(req.params.userId)
 
  user.locations.id(req.params.id).remove()
  
  const saved = await user.save()
  res.json(saved)
})

module.exports = router