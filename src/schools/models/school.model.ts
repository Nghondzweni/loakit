import * as mongoose from 'mongoose';

export const SchoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
});

export interface School {
  name: string;
  grade: number;
}
