// src/users/users.controller.ts

import { Controller, Get, Post, Body, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/dto.createuser';

@Controller('users')
export class UsersController {
  constructor(private  usersService: UserService) {}

  @Get('/users')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post('/user')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  
  async createUser(@Body() user: CreateUserDto){
    return await this.usersService.createNewUser(user);
  }

}
