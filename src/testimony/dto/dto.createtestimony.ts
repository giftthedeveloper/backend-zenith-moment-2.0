import { IsNotEmpty, Length } from "class-validator";

export class CreateTestimonyDto {
    
    @IsNotEmpty({message: 'Testimony must have user\'s name'})
    name: string;

    @IsNotEmpty({message: 'Users must have testimonies'})
    testimony: string

    @IsNotEmpty({message: 'Users must pass in event_edition'})
    event_edition: string

    phone?: string

    display_name?: string

    is_anonymous?: boolean
}
