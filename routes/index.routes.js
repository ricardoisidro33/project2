const express = require('express');
const router = express.Router();
const Team = require('../models/Team.model')
const Player = require('../models/Player.model')
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


/* GET home page */
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    let teams = await Team.find();
  console.log(teams.name)
  res.render("index", {teams});
  } catch (error) {
    console.log(error)
      next(error);
  }
  
});


router.get("/team/:id", async (req,res,next) =>{
  try {
   const {id} = req.params
   let teams = await Team.findById(id)
   
   let players = await Player.find({'team':`${teams.name}` })
   res.render('team', {teams, players})

  } catch (error) {
    console.log(error)
    next(error);
  }

})

router.get("/player/:id", async (req,res,next) =>{
  try {
   const {id} = req.params
   let player = await Player.findById(id)
        res.render('player', player)
  } catch (error) {
    console.log(error)
    next(error);
  }

})



module.exports = router;
 