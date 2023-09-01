import { EntityRepository, Repository } from 'typeorm';
import { Testimony } from './testimony.entity';

@EntityRepository(Testimony)
export class TestimonyRepository extends Repository<Testimony> {}
