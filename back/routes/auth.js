const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

// require('../passport');
// const checkRoles = (role) => {
//   return function(req, res, next) {
//     if (req.isAuthenticated() && req.user.role === role) {
//       return next();
//     } else {
//       res.redirect('/');
//     }
//   }
// }

// const checkPersonel = checkRoles('PERSONEL');
// const checkAdmin = checkRoles('ADMIN');

// router.get('/private', ensureLoggedIn(), async (req,res,next) => {
//   if(req.isAuthenticated()){
//     let user = req.user
//     res.json({user})
//     return;
//   }
//   res.status(403).json({message:'Unauthorized'});
//   if(req.user.role === 'ADMIN'){
//     try{
//       let user = await User.find()
//       console.log(user)
//       res.status(200).json({user})
//     }catch(error){
//    res.status(400).json({error})
//     } 
//   }
//   if(req.user.role === 'PERSONEL'){
//     try{
//       let user = await User.find()
//       console.log(user)
//       res.status(200).json({user})
//     }catch(error){
//         res.status(400).json({error})
//     }
//   }
// });

// router.get('/', ensureLoggedIn(), async (req,res,next) =>{
//   if(req.user.role === 'ADMIN'){
//     try{
//       let user = await User.find()
//       console.log(user)
//       res.status(200).json({users})
//     }catch(error){
//   res.status(400).json({error})
//     } 
//   }
//   if(req.user.role === 'PERSONEL'){
//     try{
//       let user = await User.find()
//       console.log(user)
//       res.status(200).json({user})
//     }catch(error){
//         res.status(400).json({error})
//     }
//   }
// })
router.post('/login',(req, res, next) => {
  console.log('info del usuario',req.body.username)
  console.log('----------------------------------------------------')
  passport.authenticate('local', (err, theUser,failureDetails) => {
    if (err) {
      res.status(403).json({ message: 'Something went wrong' })
      return;
    }
   
    if (!theUser) {
      res.status(304).json({message:"User Not found"})
      return;
    }
    // if (theUser) {
    //   res.status(200).json({message:"Already log"})
    //   return;
    // }

    req.login(theUser, (err) => {
      if (err) {
        res.status(403).json({ message: 'There is a problem with auth' })
        return
      }

      // We are now logged in (notice req.user)
      res.status(200).json(req.user)
    })
  })(req, res, next)
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password; 
  if (username === "" || password === "") {
    res.status(304).json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(304).json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass
    });

    newUser.save()
    .then(() => {
      res.status(200).json({newUser})
    })
    .catch(err => {
      res.status(403).json({ message: "Something went wrong" });
    })
  });
});
router.get("/logout", ensureLoggedOut(), (req, res) => {
  req.logout();
  res.status(200).json({message:'You are out!'})
 // res.redirect("/");
});

// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });

module.exports = router;
