import { Document } from 'mongoose';

interface ITitleDocument extends Document {
  tconst: string;
  titleType: string;
  primaryTitle: string;
  originalTitle: string;
  isAdult: boolean;
  startYear: number;
  endYear?: number;
  genres: string[];
}

export default ITitleDocument;
