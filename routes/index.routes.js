const express = require('express');
const router = express.Router();
const Team = require('../models/Team.model')
const Player = require('../models/Player.model')
const Review = require('../models/Review.model.js')
const User = require('../models/User.model')
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");


/* GET home page */
router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    const currentUser = req.session.currentUser
    let teams = await Team.find();
  console.log(teams.name)
  res.render("index", {teams, currentUser});
  } catch (error) {
    console.log(error)
      next(error);
  }
  
});


router.get("/team/:id",isLoggedIn, async (req,res,next) =>{
  try {
    const currentUser = req.session.currentUser
   const {id} = req.params
   let teams = await Team.findById(id)
   
   let players = await Player.find({'team':`${teams.name}` })
   res.render('team', {teams, players, currentUser})

  } catch (error) {
    console.log(error)
    next(error);
  }

})

router.get("/player/:id",isLoggedIn, async (req,res,next) =>{
  try {
    const currentUser = req.session.currentUser
    const userId = req.session.currentUser._id
   const {id} = req.params
   let player = await Player.findById(id).populate("reviews").populate({path: "reviews", populate: { path: "author", model: "User"}})
        res.render('player', {player, userId, currentUser})
  } catch (error) {
    console.log(error)
    next(error);
  }

})

router.post("/review/player/:id", async(req,res,next)=>{
  const {id} = req.params
  const {content} = req.body
  const userId =  req.session.currentUser._id
  try {
      //Create review
      const newReview =await Review.create({content, author: userId, player: id})
      //Add Review to player
      const playerUpdate = await Player.findByIdAndUpdate(id, {$push : {reviews : newReview._id}})
      //Add Review to user
      const userUpdate = await User.findByIdAndUpdate(userId, {$push : {createdReviews: newReview._id}})
      console.log(newReview)
      res.redirect(`/player/${id}`)
  } catch (error) {
      console.log(error)
      next(error)
  }
})



router.post("/delete-review/:id", async(req,res,next)=>{
  const reviewId = req.params.id
  const id = req.session.currentUser._id;
  //const 
  try {
     const reviewToDelete = await Review.findById(reviewId)
  
   if(reviewToDelete.author == id ){
     await Review.findByIdAndRemove(reviewId);
     res.redirect('/')
   } else {
    res.redirect("/")
   }
  } catch (error) {
    console.log(error)
    next(error);
  }
  
  
  })



router.get("/profile/:id",isLoggedIn, async (req,res,next) =>{
  try {
   const {id} = req.params
   const userId =  req.session.currentUser._id
   const currentUser = req.session.currentUser
   const user = await User.findById(userId);
   console.log(currentUser.username)
   res.render("profile", {user, userId, id})
  } catch (error) {
    console.log(error)
    next(error);
  }
})



router.get("/profile-edit/:id", isLoggedIn, async (req,res,next) =>{
  try {
    const {id} = req.params
    const userId =  req.session.currentUser._id
    const currentUser = req.session.currentUser
    let user = await User.findById(userId);
    console.log(currentUser.username)
    res.render("profile-edit", {user})
  } catch (error) {
      console.log(error)
      next(error);
  }
})

router.post("/profile-edit/:id", async (req,res,next) =>{
  try {
      const {id} = req.params
      const {email} = req.body
      const {username} = req.body
      const userId =  req.session.currentUser._id
   const currentUser = req.session.currentUser
   const updatedUser = await User.findByIdAndUpdate(id,
    {
      email, username
    })
    res.redirect(`/profile/${userId}`)
  } catch (error) {
      console.log(error)
      next(error);
  }
})

router.post("/profile/delete/:id", async (req,res,next) =>{
  try {
      const {id} = req.params
      await User.findByIdAndDelete(id)
      res.redirect('/auth/logout')
  } catch (error) {
      console.log(error)
      next(error)
  }
})


module.exports = router;
 