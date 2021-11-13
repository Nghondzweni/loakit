import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './models/teacher.model';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<Teacher>,
  ) {}

  async addTeacher(
    name: string,
    surname: string,
    code: number,
    schoolId: string,
    email: string,
    password: string
  ) {
    const newteacher = new this.teacherModel({
      name,
      surname,
      code,
      schoolId,
      email,
      password
    });
    return await newteacher.save();
  }

  async getTeachers() {
    return await this.teacherModel.find();
  }

  async editTeacher(
    _id: string,
    name: string,
    surname: string,
    code: number,
    schoolId: string,
    email: string,
    passowrd: string
  ) {
    const updatedTeacher = {
      name,
      surname,
      code, 
      schoolId,
      email,
      passowrd
    };

    return await this.teacherModel.findByIdAndUpdate(_id, updatedTeacher, {
      new: true,
    });
  }

  async deleteTeacher(_id: string) {
    return await this.teacherModel.findByIdAndRemove(_id);
  }
}
