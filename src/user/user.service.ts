import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/dto.createuser';
@Injectable()
export class UserService {
  constructor() {}

  async findAll(): Promise<User[]> {
    return User.find({
      order: {
        id: 'ASC',
      },
    });
  }

  async createNewUser(user: CreateUserDto): Promise<User> {
    const allowedReferralCodes = ['Zm2.0', 'zm2.0', 'ZM2.0', 'SOS1', 'SOS101', 'SOS202'];
    if (!allowedReferralCodes.includes(user.referral_code)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Invalid referral_code.`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

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
