import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('feedbacks')
export class FeedbacksController {
    @Get(':id')
    getFeedbackById(@Param('id') id: string) {
        console.log(id);
        return 'getFeedbackById';
    }

    @Post()
    createFeedback(@Body() body: any) {
        console.log(body);
        return 'createFeedback';
    }
}
