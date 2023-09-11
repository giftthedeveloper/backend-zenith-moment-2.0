import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Admin } from "./admin/admin.entity";
import { User } from "./user/user.entity";
import * as dotenv from 'dotenv';
import { Testimony } from "./testimony/testimony.entity";
import { DataSource } from 'typeorm';
import { Feedback } from "./feedback/fedback.entity";

dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres', 
    url: process.env.DB_URL, 
    entities: [User, Admin, Testimony, Feedback],
    migrations: [__dirname + '/migrations/*.ts'],
    autoLoadEntities: true,
    synchronize: true,
};

export const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    });
export default typeOrmConfig;

