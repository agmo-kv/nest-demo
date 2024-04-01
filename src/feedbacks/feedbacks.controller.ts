import { Controller, Get, Post } from '@nestjs/common';

@Controller('feedbacks')
export class FeedbacksController {
    @Get(':id')
    getFeedbackById() {
        return 'getFeedbackById';
    }

    @Post()
    createFeedback() {
        return 'createFeedback';
    }
}
