const { model, Schema } = require('mongoose');

const classSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  day: String,
  hour: String,
  discipline: String,

});

module.exports = model('Class', classSchema);
