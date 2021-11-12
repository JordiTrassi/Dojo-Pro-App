const { model, Schema } = require('mongoose');

const studentSchema = Schema({
  name: String,
  surname: String,
  photo: {
    type: String,
    default: 'https://cdn2.iconfinder.com/data/icons/ronin-warriors/512/asia-theather-japan-warrior-mask-ronin-512.png',
  },

  classes: [
    { type: Schema.Types.ObjectId, ref: 'Class' },
  ],
  assistance: [
    { type: Schema.Types.ObjectId, ref: 'Assist' },
  ],
  disciplines: [
    { type: Schema.Types.ObjectId, ref: 'Discipline' },
  ],

});

module.exports = model('Student', studentSchema);
