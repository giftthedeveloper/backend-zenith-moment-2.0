import { IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: 'Users should have a full name'})
    fullName: string;

    email: string;

    @IsNotEmpty({message: 'Phone number  should not be less than 10'})
    @Length(10, 15)
    phonenumber: string

    @IsNotEmpty({message: 'Users must be male or female '})
    gender: string
}