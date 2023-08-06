import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";

@Module({
    controllers: [UsersController],
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserService]
})
export class UserModule {}
