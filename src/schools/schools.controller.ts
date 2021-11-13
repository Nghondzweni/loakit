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

import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  async addSchool(@Body('name') name: string, @Body('grade') grade: number) {
    return await this.schoolsService.addSchool(name, grade);
  }

  @Get()
  async getSchools() {
    return await this.schoolsService.getSchools();
  }

  @Put()
  async editSchool(
    @Body('_id') _id: string,
    @Body('name') name: string,
    @Body('grade') grade: number,
  ) {
    return await this.schoolsService.editSchool(_id, name, grade);
  }

  @Delete()
  async deleteSchool(@Body('_id') _id: string) {
    return await this.schoolsService.deleteSchool(_id);
  }
}
