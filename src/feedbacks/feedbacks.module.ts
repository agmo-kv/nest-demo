import { Module } from '@nestjs/common';
import { FeedbacksController } from './feedbacks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedbacks } from './feedbacks.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feedbacks])],
  controllers: [FeedbacksController],
})
export class FeedbacksModule {}
