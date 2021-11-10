import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { get } from 'http';

import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Post()
  async addSchool (
      @Body('name') name: string,
      @Body('grade') grade: number,
  ) {
      const generatedId = await this.schoolsService.insertSchool(
          name,
          grade
      );
      return{id: generatedId};
  }

  @Get()
  async getSchools() {
      return(await this.schoolsService.getSchools());
  }
}


