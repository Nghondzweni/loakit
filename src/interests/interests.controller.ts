import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Put,
} from '@nestjs/common';

import { InterestsService } from './interests.service';

@Controller('interests')
export class InterestsController {
  constructor(private readonly interestService: InterestsService) {}

  @Post()
  async addInterest(@Body('name') name: string) {
    return await this.interestService.addInterest(name);
  }

  @Get()
  async getInterests() {
    return await this.interestService.getInterest();
  }

  @Put()
  async editSchool(
    @Body('_id') _id: string,
    @Body('name') name: string,
  ) {
    return await this.interestService.editInterest(_id, name);
  }

  @Delete()
  async deleteSchool(@Body('_id') _id: string) {
    return await this.interestService.deleteInterest(_id);
  }
}
