import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackRepository } from './feedback.repository';

@Module({
    controllers: [FeedbackController],
    imports: [TypeOrmModule.forFeature([FeedbackRepository])],
    providers: [FeedbackService]

})
export class FeedbackModule {}
