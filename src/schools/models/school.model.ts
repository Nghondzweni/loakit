import * as mongoose from 'mongoose';
import { LearnerSchema } from 'src/learners/models/learner.model';

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
