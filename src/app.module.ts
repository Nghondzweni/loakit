import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';
import { LearnersModule } from './learners/learners.module';
import { TeachersModule } from './teachers/teachers.module';
import { InterestsModule } from './interests/interests.module';
import { RewardsModule } from './rewards/rewards.module';

@Module({
  imports: [
    SchoolsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/loakit'),
    LearnersModule,
    TeachersModule,
    InterestsModule,
    RewardsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
