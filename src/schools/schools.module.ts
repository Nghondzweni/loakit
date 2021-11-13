import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SchoolSchema } from './models/school.model';
import { SchoolsController } from './schools.controller';
import { SchoolsService } from './schools.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'School', schema: SchoolSchema}])],
  controllers: [SchoolsController],
  providers: [SchoolsService]
})
export class SchoolsModule {}
