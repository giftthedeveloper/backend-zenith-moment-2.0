// src/users/users.controller.ts

import { Controller, Get, Post, Delete, Body, HttpCode, UsePipes, ValidationPipe, Param, HttpException, HttpStatus } from '@nestjs/common';
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
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  
  async createUser(@Body() user: CreateUserDto){
    try {
      
      return await this.usersService.createNewUser(user);
    } catch (error) {
      if (error.code === '23505') { // TypeORM's duplicate key violation error code
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `User with the given ${error.detail.includes('email') ? 'email' : 'phone number'} already exists.`,
          },
          HttpStatus.NOT_FOUND,
        );
      } else {
        throw error; 
      }
    }
  }



  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<void> {
    return this.usersService.deleteUser(id);
  }

}
