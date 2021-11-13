import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Interest } from 'src/interests/models/interest.model';

@Injectable()
export class RewardsService {
    constructor(
        @InjectModel('Reward') private readonly rewardModel: Model<Interest>,
      ) {}
    
      async addReward(name: string) {
        const newReward = new this.rewardModel({ name });
        return await newReward.save();
      }
    
      async getReward() {
        return await this.rewardModel.find();
      }
    
      async editReward(_id: string, name: string) {
        const updatedReward = {
          name: name,
        };
        return await this.rewardModel.findByIdAndUpdate(_id, updatedReward, {
          new: true,
        });
      }
    
      async deleteReward(_id: string) {
        return await this.rewardModel.findByIdAndRemove(_id);
      }
}
