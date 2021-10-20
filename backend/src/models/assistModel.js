const { model, Schema } = require('mongoose');

const assistSchema = Schema({
  day: Date,
  assistday: Boolean,
  class: { type: Schema.Types.ObjectId, ref: 'Class' },

});

module.exports = model('Assist', assistSchema);
