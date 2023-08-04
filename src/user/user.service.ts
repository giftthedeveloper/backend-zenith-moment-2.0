import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/dto.createuser';

@Injectable()
export class UserService {
  constructor() {}

  async findAll(): Promise<User[]> {
    return User.find();
  }

  async createNewUser(user: CreateUserDto): Promise<User> {
    return User.save(user);
  }
}
