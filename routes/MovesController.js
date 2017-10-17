const express = require('express')
const router = express.Router({mergeParams: true})
const { UserModel, MoveModel, LocationModel } = require('../db/schema')

router.post('/', async (req, res) => {
    try{
      const newMove = new MoveModel()
      const user = await UserModel.findById(req.params.userId)
      const location = user.locations.id(req.params.locationId)
    console.log('New Activity')
       console.log(location) 
       location.moves.push(newMove)
       
      const saved = await user.save()
      res.send(saved)
    } catch (err) {
        res.send(err)
        console.log(err)
    }
    
  })

  router.patch('/:id', async (req, res) => {
    const updatedMove = req.body.move
    const user = await UserModel.findById(req.params.userId)
    const move = user.moves.id(req.params.id)
  
    move.city = updatedMove.city
    move.state = updatedMove.state
  
    const saved = await user.save()
    res.json(saved)
  })

  router.delete('/:id', async (req, res) => {
    
      const user = await UserModel.findById(req.params.userId)
    //   user has many locations, we need to get one
      const location = user.locations.id(req.params.locationId)
      // have many moves. we need to find one
      const move = location.moves.id(req.params.id).remove()
      
      const saved = await user.save()
      res.json(saved)
    })







module.exports = router