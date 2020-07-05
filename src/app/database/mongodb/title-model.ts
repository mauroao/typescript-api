import { Schema, model } from 'mongoose';

const titleSchema = new Schema({
  tconst: String,
  titleType: String,
  primaryTitle: String,
  originalTitle: String,
  isAdult: Boolean,
  startYear: Number,
  endYear: Number,
  genres: [String]
});

const titleModel = model('title', titleSchema);

export default titleModel;
