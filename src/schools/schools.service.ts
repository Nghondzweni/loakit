import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { School } from './models/school.model';

@Injectable()
export class SchoolsService {
  private schools: School[] = [];

  constructor(
    @InjectModel('School') private readonly schoolModel: Model<School>,
  ) {}

  async insertSchool(name: string, grade: number) {
      const schoolId = Math.random().toString();
      const newSchool = new this.schoolModel({name, grade});
      return (await newSchool.save());
      
  }
}
