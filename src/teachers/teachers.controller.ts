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
  
  import { TeachersService } from './teachers.service';
  
  @Controller('teachers')
  export class TeachersController {
    constructor(private readonly teachersService: TeachersService) {}
  
    @Post()
    async addTeacher(
      @Body('name') name: string,
      @Body('surname') surname: string,
      @Body('code') code: number,
      @Body('schoolId') schoolId: string,
      @Body('email') email: string,
      @Body('password') password: string,

      ) {
      return await this.teachersService.addTeacher(
          name,
          surname,
          code,
          schoolId,
          email,
          password
      );
    }
  
    @Get()
    async getTeachers() {
      return await this.teachersService.getTeachers();
    }
  
    @Put()
    async editTeachers(
      @Body('_id') _id: string,
      @Body('name') name: string,
      @Body('surname') surname: string,
      @Body('code') code: number,
      @Body('schoolId') schoolId: string,
      @Body('email') email: string,
      @Body('schoolId') password: string,
    ) {
      return await this.teachersService.editTeacher(
          _id,
          name,
          surname,
          code,
          schoolId,
          email,
          password
          );
    }
  
    @Delete()
    async deleteTeacher(@Body('_id') _id: string) {
      return await this.teachersService.deleteTeacher(_id);
    }
  }
  