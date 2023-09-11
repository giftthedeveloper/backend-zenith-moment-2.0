import { IsNotEmpty, Length } from "class-validator";

export class CreateFeedbackDto {
    
    name?: string;

    @IsNotEmpty({message: 'instance must be male or female'})
    gender: string;

    @IsNotEmpty({message: 'instance must have an email'})
    email: string;

    @IsNotEmpty({message: 'Users must rate accomodation'})
    accomodation: number;

    @IsNotEmpty({message: 'Users must rate spirituality'})
    spirituality: number;

    @IsNotEmpty({message: 'Users must rate cordination'})
    cordination: number;

    highlight_moment?: string

    recommendation_suggestion?: string;
}
