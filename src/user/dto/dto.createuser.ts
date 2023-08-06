import { IsNotEmpty, Length } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: 'Users should have a full name'})
    fullName: string;

    email: string;

    @IsNotEmpty({message: 'Users must be male or female '})
    gender: string

    @IsNotEmpty({message: 'Users must specify a pickup point '})
    pickup_point: string

    @IsNotEmpty({message: 'Users must specify an expected arrival date'})
    expected_arrival_date: string

}
