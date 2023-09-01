import { IsNotEmpty, Length } from "class-validator";

export class CreateTestimonyDto {
    save(): import("../testimony.entity").Testimony | PromiseLike<import("../testimony.entity").Testimony> {
        throw new Error('Method not implemented.');
    }
    @IsNotEmpty({message: 'Testimony must have user\'s name'})
    name: string;

    @IsNotEmpty({message: 'Users must have testimonies'})
    testimony: string


}
