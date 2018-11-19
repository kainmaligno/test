const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const personelSchema = new Schema({
  name: String,
  gender: {type: String, enum: ['Male', 'Female']},
  email: String,
  contractDate: {type:Date},
  role: {
    type: String,
    enum : ['TEST','BASE'],
    default : 'TEST'
       }
 }, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Personnel = mongoose.model('Personnel', personelSchema);
module.exports = Personnel;
