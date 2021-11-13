import { Module } from '@nestjs/common';
import { LearnersService } from './learners.service';
import { LearnersController } from './learners.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LearnerSchema } from './models/learner.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Learner', schema: LearnerSchema}])],
  providers: [LearnersService],
  controllers: [LearnersController]
})
export class LearnersModule {}
