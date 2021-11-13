import * as mongoose from 'mongoose';

export const RewardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export interface Reward {
  name: string;
}
