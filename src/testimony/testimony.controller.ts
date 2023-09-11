import { TestimonyService } from './testimony.service';
import { Controller, Get, Post, Delete, Body, HttpCode, UsePipes, ValidationPipe, Param, HttpException, HttpStatus } from '@nestjs/common';
import { Testimony } from './testimony.entity';
import { CreateTestimonyDto } from './dto/dto.createtestimony';

@Controller('testimony')
export class TestimonyController {
    constructor(private  testimonyService: TestimonyService) {}

    @Get('/')
    async findAll(): Promise<Testimony[]> {
        return this.testimonyService.findAll();
    }

    @Post('/create')
    @HttpCode(201)
    @UsePipes(ValidationPipe)
    async createTestimony(@Body() testimonyDto: CreateTestimonyDto): Promise<Testimony> {
        return this.testimonyService.createNewTestimony(testimonyDto);
    }

    @Delete('/delete/:id')
    async deleteTestimony(@Param('id') id: number): Promise<void> {
        await this.testimonyService.deleteTestimony(id);
    }  
}
