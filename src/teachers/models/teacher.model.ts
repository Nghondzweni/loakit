import * as mongoose from 'mongoose';

export const TeacherSchema = new mongoose.Schema({
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
  code: {
    type: Number,
    required: true,
  },
  schoolId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
      type: String,
      required: true,
  }
});

export interface Teacher {
  name: string;
  surname: string;
  code: number;
  schoolId: string;
  email: string;
  password: string;
}
