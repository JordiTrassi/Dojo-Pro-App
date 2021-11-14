const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');
const { isValidPassword } = require('./userModel.isValidPassword');

const userSchema = new Schema({
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
    // En caso de necesitarlo
  },
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
    required: true,
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
}, {
  timestamps: true,
});

userSchema.pre('save', async function Encrypt(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.isValidPassword = isValidPassword;

module.exports = model('User', userSchema);
