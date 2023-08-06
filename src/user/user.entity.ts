import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: String;

  @Column({ unique: true })
  phonenumber: String;

  @Column()
  referral_code: String;

  @Column()
  gender: String;

  @Column()
  pickup_point: String;

  @Column()
  expected_arrival_date: String;

  @Column({ default: false }) 
  is_volunteer: boolean; 

  @Column({ nullable: true })
  department: string; 

  @Column()
  expectations: String;
}
