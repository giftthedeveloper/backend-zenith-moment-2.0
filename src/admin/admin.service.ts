import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './admin.entity';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './dto/admin.signup.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async validateAdmin(username: string, password: string): Promise<any> {
    const admin = await Admin.findOne({ where: { username } });
    if (admin && (await admin.validatePassword(password))) {
      const { password, ...result } = admin;
      return result;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(username: string, password: string) {
    const admin = await this.validateAdmin(username, password);
    const payload = { username: admin.username, sub: admin.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<void> {
    const { username, password } = createAdminDto;

    // Check if the username is already taken
    const existingAdmin = await Admin.findOne({ where: { username } });
    if (existingAdmin) {
      throw new ConflictException('Username already taken');
    }

    const newAdmin = Admin.create({ username });
    await newAdmin.setPassword(password);
    await Admin.save(newAdmin);
  }
}
