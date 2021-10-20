const { model, Schema } = require('mongoose');

const disciplineSchema = Schema({
  discipline: String,
  degree: String,
});

module.exports = model('Discipline', disciplineSchema);
