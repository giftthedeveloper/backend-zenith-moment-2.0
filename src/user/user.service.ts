import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/dto.createuser';
import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import * as nodemailer from 'nodemailer';

@Injectable()
export class UserService {
  private readonly transporter;
  private readonly templatesDir = path.join(__dirname, '..', '..', 'src', 'email'); // Adjust the path based on your project structure

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'souledouteam@gmail.com',
        pass: 'soulution',
      },
    });
  }

  async findAll(): Promise<User[]> {
    return User.find();
  }

  async createNewUser(user: CreateUserDto): Promise<User> {
    const allowedReferralCodes = ['Zm2.0', 'SOS1', 'SOS101', 'SOS202'];
    if (!allowedReferralCodes.includes(user.referral_code)) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: `Invalid referral_code.`,
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const newUser = await User.save(user);

    // Read and render email template
    const templatePath = path.join(this.templatesDir, 'register_mail.html');
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const renderedTemplate = ejs.render(templateContent, {
      username: newUser.fullName,
      app_name: 'Your App Name', // Customize with your app name
    });

    // Send customized email to the new user
    const mailOptions = {
      from: 'souledouteam@gmail.com',
      to: newUser.email,
      subject: 'Zenith Moment Registration Successful!',
      html: renderedTemplate,
    };

    this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    return newUser;
  }

  async deleteUser(id: number): Promise<void> {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found.`);
    }
    await User.delete(id);
  }
}
