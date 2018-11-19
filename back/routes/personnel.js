const express = require('express');
const router = express.Router();
const Personnel = require('../models/Personnel')


//ALL PERSONEL
router.get('/all', async (req,res,next)=> {
  try{
    let persons = await Personnel.find().sort({date: -1});
    res.status(200).json(persons)
  }catch(error){
    res.status(403).json({error})
  }
});
router.get('/person/:id', async (req,res,next) => {
  try{
    const id = req.params.id
       let person = await Personnel.findById(id)
       res.status(200).json(person)
  }catch(error){
     res.status(400).json(error)
  }
})
//NEW PERSONEL
router.post('/newPersonel', (req,res,next) => {
  const { name, gender,email,contractDate,role }=req.body;
  const newPersonnel = new Personnel({
    name,
    gender,
    email,
    contractDate,
    role
  })
  newPersonnel
  .save()
  .then(personnel => {
    res.status(200).json(personnel)
  })
  .catch(error =>{
    res.status(403).json({message:{error}})
  })
})
//UPDATE PERSONEL
router.put("/update_person/:id", async (req, res, next) => {
  try{
    let id = req.params.id
    const { name, gender,email,contractDate,role }=req.body;

  let update = await Personnel.findByIdAndUpdate(id, {$set: req.body},function (err, person)  {
    if (err) return next(err);
    res.status(200).send({message:'Person udpated.'});
})
  }catch(error){
    res.status(403).json({message:"Personel can't be updated"})
  }
})

//DELETE PERSONEL
router.delete("/remove_person/:id", async (req, res, next) => {
  try{
    let id = req.params.id
    let erase =  await Personnel.findByIdAndRemove(id, err => {
      if (err) return next(err);
      res.status(200).send({message:"Deleted successfully!"});
    });
  }catch(error){
      res.status(403).send({message:"can't erase person now!",error})
  }
 
});
module.exports = router;