import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('testimonies')
export class Testimony extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default: 'Anonymous'})
    display_name: string;

    @Column()
    testimony: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ default: 'Zenith moment 2.0'})
    event_edition: String;

    @Column({ default: false})
    is_anonymous: boolean;

}