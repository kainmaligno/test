const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const personelSchema = new Schema({
  name: String,
  gender: {type: String, enum: ['Male', 'Female']},
  email: String,
  contractDate: Date,
  role: {
    type: String,
    enum : ['PERSONEL','ADMIN'],
    default : 'PERSONEL'
       }
 }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Personel = mongoose.model('Personel', personelSchema);
module.exports = Personel;
