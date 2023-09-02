import { Module } from '@nestjs/common';
import { TestimonyController } from './testimony.controller';
import { TestimonyService } from './testimony.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestimonyRepository } from './testimony.repository';

@Module({
    controllers: [TestimonyController],
    imports: [TypeOrmModule.forFeature([TestimonyRepository])],
    providers: [TestimonyService]

})
export class TestimonyModule {}
