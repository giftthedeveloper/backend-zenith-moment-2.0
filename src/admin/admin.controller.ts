import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginDto } from './dto/admin.login.dto';
import { CreateAdminDto } from './dto/admin.signup.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    return this.adminService.login(loginDto.username, loginDto.password);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }
}
