import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { Admin } from "./admin.entity";
import { AdminRepository } from "./admin.repository";


@Module({
  controllers: [AdminController],
  imports: [
    TypeOrmModule.forFeature([Admin]),
    JwtModule.register({
      secret: 'defaultSecret', 
      signOptions: { expiresIn: '2d' },
    }),
  ],
  providers: [AdminService],
})
export class AdminModule {}
