import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [SchoolsModule, MongooseModule.forRoot('mongodb://localhost:27017/loakit')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
