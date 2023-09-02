import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeormconfig';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { TestimonyService } from './testimony/testimony.service';
import { TestimonyController } from './testimony/testimony.controller';
import { TestimonyModule } from './testimony/testimony.module';

@Module({
  imports: [
    UserModule,
    AdminModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    TestimonyModule,
  ],
  controllers: [AppController, TestimonyController],
  providers: [AppService, TestimonyService],
})
export class AppModule {}
