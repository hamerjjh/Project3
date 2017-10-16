const express = require('express')
const router = express.Router({mergeParams: true})
const { UserModel, LocationModel } = require('../db/schema')

router.post('/', async (req, res) => {
  const newLocation = new Location()

  const user = await UserModel.findById(req.params.userId)

  user.locations.push(newLocations)
 
  const saved = await user.save()
  res.json(saved)
})

router.patch('/:id', async (req, res) => {
  const updatedLocation = req.body.location
  const user = await UserModel.findById(req.params.userId)
  const location = user.locations.id(req.params.id)

  location.city = updatedLocaitons.city
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