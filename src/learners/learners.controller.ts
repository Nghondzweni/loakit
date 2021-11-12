import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Put,
} from '@nestjs/common';

import { LearnersService } from './learners.service';

@Controller('learners')
export class LearnersController {
  constructor(private readonly learnersService: LearnersService) {}

  @Post()
  async addLearner(
    @Body('name') name: string,
    @Body('surname') surname: string,
    @Body('age') age: number,
    @Body('grade') grade: number,
    @Body('code') code: number,
    @Body('schoolId') schoolId: string,
  ) {
    return await this.learnersService.addLearner(
        name,
        surname,
        age,
        grade,
        code,
        schoolId
    );
  }

  @Get()
  async getlearners() {
    return await this.learnersService.getLearners();
  }

  @Put()
  async editlearner(
    @Body('_id') _id: string,
    @Body('name') name: string,
    @Body('surname') surname: string,
    @Body('age') age: number,
    @Body('grade') grade: number,
    @Body('code') code: number,
    @Body('schoolId') schoolId: string,
  ) {
    return await this.learnersService.editLearner(
        _id,
        name,
        surname,
        age,
        grade,
        code,
        schoolId
        );
  }

  @Delete()
  async deletelearner(@Body('_id') _id: string) {
    return await this.learnersService.deleteLearner(_id);
  }
}
