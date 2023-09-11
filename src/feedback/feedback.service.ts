// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class FeedbackService {}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from './fedback.entity';
import { CreateFeedbackDto } from './dto/dto.createfeedback';

@Injectable()
export class FeedbackService {
    constructor() {}

    async findAll(): Promise<Feedback[]> {
        return Feedback.find({
        order: {
            id: 'ASC',
        },
        });
    }
    async createNewFeedback(feedback: CreateFeedbackDto): Promise<Feedback> {
        const feedback_instance = new Feedback();
        feedback_instance.name = feedback.name;
        feedback_instance.gender = feedback.gender;
        feedback_instance.email = feedback.email;
        feedback_instance.accomodation = feedback.accomodation;
        feedback_instance.spirituality = feedback.spirituality
        feedback_instance.cordination = feedback.cordination
        feedback_instance.highlight_moment = feedback.highlight_moment
        feedback_instance.recommendation_suggestion = feedback.recommendation_suggestion

        return await feedback_instance.save();
    }
    async deleteFeedback(id: number): Promise<void> {
        const instance = await Feedback.findOne({ where: { id } });
        if (!instance) {
          throw new NotFoundException(`Feedback with ID ${id} not found.`);
        }
        await Feedback.delete(id);
    }
}
