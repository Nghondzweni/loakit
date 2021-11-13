import * as mongoose from 'mongoose';

export const LearnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  surname: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  schoolId: {
      type: String,
      required: true
  },
  interests: {
    type: [String],
  }
});

export interface Learner {
    name: string;
    surname: string;
    age: number;
    grade: number;
    code: number;
    schoolId: string;
    interests: [string];
}
