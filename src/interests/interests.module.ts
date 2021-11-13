import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InterestsController } from './interests.controller';
import { InterestsService } from './interests.service';
import { InterestSchema } from './models/interest.model';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Interest', schema: InterestSchema}])],
  controllers: [InterestsController],
  providers: [InterestsService]
})
export class InterestsModule {}
