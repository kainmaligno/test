const express = require('express');
const router = express.Router();
const Personel = require('../models/Personel')


//ALL PERSONEL
router.get('/all', async (req,res,next)=> {
  try{
    let personel = await Personel.find().sort({date: -1});
    res.status(200).json({personel})
  }catch(error){
    res.status(403).json({error})
  }
});

//NEW PERSONEL
router.post('/newPersonel', (req,res,next) => {
  const { name, gender,email,contractDate,role }=req.body;
  const newPersonel = new Personel({
    name,
    gender,
    email,
    contractDate,
    role
  })
  newPersonel
  .save()
  .then(personel => {
    res.status(200).json({message:{personel}})
  })
  .catch(error =>{
    res.status(403).json({message:{error}})
  })
})
//UPDATE PERSONEL
router.put("/update_person/:id", async (req, res, next) => {
  try{
  let update = await Personel.findByIdAndUpdate(req.params.id, {$set: req.body},function (err, product)  {
    if (err) return next(err);
    res.status(200).send({message:'Person udpated.',update});
})
  }catch(error){
    res.status(403).json({message:"Personel can't be updated"})
  }
})

//DELETE PERSONEL
router.delete("/remove_person/:id", async (req, res, next) => {
  try{
    let erase =  await Product.findByIdAndRemove(req.params.id, err => {
      if (err) return next(err);
      res.status(200).send({message:"Deleted successfully!",erase});
    });
  }catch(error){
      res.status(403).send({message:"can't erase person now!",error})
  }
 
});
module.exports = router;