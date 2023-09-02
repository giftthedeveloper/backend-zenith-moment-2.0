import { Injectable, NotFoundException } from '@nestjs/common';
import { Testimony } from './testimony.entity';
import { CreateTestimonyDto } from './dto/dto.createtestimony';

@Injectable()
export class TestimonyService {
    constructor() {}

    async findAll(): Promise<Testimony[]> {
        return Testimony.find({
        order: {
            id: 'DESC',
        },
        });
    }
    async createNewTestimony(testimony: CreateTestimonyDto): Promise<Testimony> {
        const testimony_instance = new Testimony();
        testimony_instance.name = testimony.name;
        testimony_instance.testimony = testimony.testimony;
        testimony_instance.phone = testimony.phone;
        testimony_instance.event_edition = testimony.event_edition;
        testimony_instance.is_anonymous = testimony.is_anonymous
        
        if (testimony_instance.is_anonymous) {
            testimony_instance.display_name == 'Anonymous'
        } else {
            testimony_instance.display_name = testimony_instance.name
        }

        return await testimony_instance.save();
    }
    async deleteTestimony(id: number): Promise<void> {
        const instance = await Testimony.findOne({ where: { id } });
        if (!instance) {
          throw new NotFoundException(`Testimony with ID ${id} not found.`);
        }
        await Testimony.delete(id);
    }
}
