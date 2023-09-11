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
import { FeedbackService } from './feedback/feedback.service';
import { FeedbackController } from './feedback/feedback.controller';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    UserModule,
    AdminModule,
    TestimonyModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    FeedbackModule,
  ],
  controllers: [AppController, TestimonyController, FeedbackController],
  providers: [AppService, TestimonyService, FeedbackService],
})
export class AppModule {}
