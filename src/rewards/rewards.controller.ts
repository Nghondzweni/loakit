import {
    Controller,
    Post,
    Body,
    Get,
    Delete,
    Put,
  } from '@nestjs/common';
import { RewardsService } from './rewards.service';

@Controller('rewards')
export class RewardsController {
  constructor(private readonly rewardService: RewardsService) {}

  @Post()
  async addReward(@Body('name') name: string) {
    return await this.rewardService.addReward(name);
  }

  @Get()
  async getReward() {
    return await this.rewardService.getReward();
  }

  @Put()
  async editReward(@Body('_id') _id: string, @Body('name') name: string) {
    return await this.rewardService.editReward(_id, name);
  }

  @Delete()
  async deleteReward(@Body('_id') _id: string) {
    return await this.rewardService.deleteReward(_id);
  }
}
