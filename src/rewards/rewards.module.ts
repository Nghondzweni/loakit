import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RewardSchema } from './models/reward.model';
import { RewardsController } from './rewards.controller';
import { RewardsService } from './rewards.service';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Reward', schema: RewardSchema}])],
  controllers: [RewardsController],
  providers: [RewardsService]
})
export class RewardsModule {}
