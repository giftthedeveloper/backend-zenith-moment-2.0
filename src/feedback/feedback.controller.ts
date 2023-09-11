// import { Controller } from '@nestjs/common';

// @Controller('feedback')
// export class FeedbackController {}

import { FeedbackService } from './feedback.service';
import { Controller, Get, Post, Delete, Body, HttpCode, UsePipes, ValidationPipe, Param, HttpException, HttpStatus } from '@nestjs/common';
import { Feedback } from './fedback.entity';
import { CreateFeedbackDto } from './dto/dto.createfeedback';

@Controller('feedback')
export class FeedbackController {
    constructor(private  feedbackservice: FeedbackService) {}

    @Get('/')
    async findAll(): Promise<Feedback[]> {
        return this.feedbackservice.findAll();
    }

    @Post('/create')
    @HttpCode(201)
    @UsePipes(ValidationPipe)
    async createTestimony(@Body() feedbackDto: CreateFeedbackDto): Promise<Feedback> {
        return this.feedbackservice.createNewFeedback(feedbackDto);
    }

    @Delete('/delete/:id')
    async deleteTestimony(@Param('id') id: number): Promise<void> {
        await this.feedbackservice.deleteFeedback(id);
    }  
}
