import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: String;

  @Column()
  phonenumber: String;

  @Column()
  gender: String;

  @Column()
  pickup_point: String;
  
  @Column()
  expected_arrival_date: String;

  @Column()
  expectations: String;

}
