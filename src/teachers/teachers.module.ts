import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { TeacherSchema } from './models/teacher.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Teacher', schema: TeacherSchema}])],
  providers: [TeachersService],
  controllers: [TeachersController]
})
export class TeachersModule {}
