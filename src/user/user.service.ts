import { Injectable, NotFoundException } from '@nestjs/common';
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

  async deleteUser(id: number): Promise<void> {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    await User.delete(id);
  }

}
