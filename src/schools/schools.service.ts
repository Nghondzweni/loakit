import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { School } from './models/school.model';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectModel('School') private readonly schoolModel: Model<School>,
  ) {}

  async addSchool(name: string, grade: number) {
    const newSchool = new this.schoolModel({ name, grade });
    return await newSchool.save();
  }

  async getSchools() {
    return await this.schoolModel.find();
  }

  async editSchool(_id: string, name: string, grade: number) {
    const updatedSchool = {
      name: name,
      grade: grade,
    };
    return await this.schoolModel.findByIdAndUpdate(_id, updatedSchool, {
      new: true,
    });
  }

  async deleteSchool(_id: string) {
    return await this.schoolModel.findByIdAndRemove(_id);
  }
}
