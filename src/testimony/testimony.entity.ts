import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('testimonies')
export class Testimony extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    testimony: string;

    @Column()
    phone: string;

    @Column()
    event_edition: String;

    @Column({ default: false})
    is_anonymous: boolean;

}