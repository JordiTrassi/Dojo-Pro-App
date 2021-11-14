const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');
const { isValidPassword } = require('./userModel.isValidPassword');

const userSchema = new Schema({
  name: {
    type: String,
    rquiered: true,
  },
  surname: String,
  email: {
    type: String,
    rquiered: true,
    unique: true,
  },
  photo: {
    type: String,
    default: 'https://cdn2.iconfinder.com/data/icons/ronin-warriors/512/asia-theather-japan-warrior-mask-ronin-512.png',
  },
  password: {
    type: String,
    rquiered: true,
  },

  disciplines: [
    { type: Schema.Types.ObjectId, ref: 'Discipline' },
  ],

  classes: [
    { type: Schema.Types.ObjectId, ref: 'Class' },
  ],

  students: [
    { type: Schema.Types.ObjectId, ref: 'Student' },
  ],
}, { timestamps: true });

userSchema.methods.isValidPassword = isValidPassword;

module.exports = model('User', userSchema);
