import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFeedbackDto } from './dtos/create-feedback.dto';
import { FeedbacksService } from './feedbacks.service';

@Controller('feedbacks')
export class FeedbacksController {
  constructor(private feedbacksService: FeedbacksService) {}

  @Get(':id')
  getFeedbackById(@Param('id') id: string) {
    console.log(id);
    return this.feedbacksService.getFeedbackById(parseInt(id));
  }

  @Post()
  createFeedback(@Body() body: CreateFeedbackDto) {
    console.log(body);
    return this.feedbacksService.createFeedback(body.title, body.description);
  }
}
