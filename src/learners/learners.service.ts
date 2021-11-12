import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Learner } from './models/learner.model';

@Injectable()
export class LearnersService {
  constructor(
    @InjectModel('Learner') private readonly learnerModel: Model<Learner>,
  ) {}

  async addLearner(
    name: string,
    surname: string,
    age: number,
    grade: number,
    code: number,
    schoolId: string,
  ) {
    const newLearner = new this.learnerModel({
      name,
      surname,
      age,
      grade,
      code,
      schoolId,
    });
    return await newLearner.save();
  }

  async getLearners() {
    return await this.learnerModel.find();
  }

  async editLearner(
    _id: string,
    name: string,
    surname: string,
    age: number,
    grade: number,
    code: number,
    schoolId: string,
  ) {
    const updatedLearner = {
      name,
      surname,
      age,
      grade,
      code,
      schoolId,
    };

    return await this.learnerModel.findByIdAndUpdate(_id, updatedLearner, {
      new: true,
    });
  }

  async deleteLearner(_id: string) {
    return await this.learnerModel.findByIdAndRemove(_id);
  }
}
