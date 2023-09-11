import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('feedbacks')
export class Feedback extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column({unique: true})
    email: string;

    @Column()
    accomodation: number;

    @Column()
    spirituality: number;

    @Column()
    cordination: number;
    
    @Column()
    highlight_moment: string;

    @Column()
    recommendation_suggestion: string;


}