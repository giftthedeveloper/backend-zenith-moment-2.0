import { EntityRepository, Repository } from 'typeorm';
import { Feedback } from './fedback.entity';


@EntityRepository(Feedback)
export class FeedbackRepository extends Repository<Feedback> {}
