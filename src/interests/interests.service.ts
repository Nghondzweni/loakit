import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Learner } from 'src/learners/models/learner.model';
import { Interest } from './models/interest.model';

@Injectable()
export class InterestsService {
    constructor(
        @InjectModel('Interest') private readonly interestModel: Model<Interest>,
      ) {}
    
      async addInterest(name: string) {
        const newInterest = new this.interestModel({ name });
        return await newInterest.save();
      }
    
      async getInterest() {
        return await this.interestModel.find();
      }
    
      async editInterest(_id: string, name: string) {
        const updatedInterest = {
          name: name,
        };
        return await this.interestModel.findByIdAndUpdate(_id, updatedInterest, {
          new: true,
        });
      }
    
      async deleteInterest(_id: string) {
        return await this.interestModel.findByIdAndRemove(_id);
      }
}
