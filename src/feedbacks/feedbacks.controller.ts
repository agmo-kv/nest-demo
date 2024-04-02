import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateFeedbackDto } from './dtos/create-feedback.dto';

@Controller('feedbacks')
export class FeedbacksController {
    @Get(':id')
    getFeedbackById(@Param('id') id: string) {
        console.log(id);
        return 'getFeedbackById';
    }

    @Post()
    createFeedback(@Body() body: CreateFeedbackDto) {
        console.log(body);
        return 'createFeedback';
    }
}
