import { Schema, model } from 'mongoose';
import ITitleDocument from './i-title-document';

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

const titleModel = model<ITitleDocument>('title', titleSchema);

export default titleModel;
