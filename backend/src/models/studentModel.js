const { model, Schema } = require('mongoose');

const studentSchema = Schema({
  name: String,
  surname: String,
  photo: String,

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
