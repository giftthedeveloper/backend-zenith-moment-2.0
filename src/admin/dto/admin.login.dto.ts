
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({message: 'Enter your username'})
  username: string;

  @IsNotEmpty({message: 'Enter your password'})
  password: string;
}
