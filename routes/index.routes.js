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
        res.render('team', {teams})
  } catch (error) {
    console.log(error)
    next(error);
  }

}) */



module.exports = router;
 