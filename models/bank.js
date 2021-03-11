const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  nomorRekening: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const ModelName = mongoose.model('Bank', bankSchema);
module.exports = ModelName;
