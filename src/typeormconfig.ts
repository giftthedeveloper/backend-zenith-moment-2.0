import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Admin } from "./admin/admin.entity";
import { User } from "./user/user.entity";
import * as dotenv from 'dotenv';
import { Testimony } from "./testimony/testimony.entity";
import { DataSource } from 'typeorm';

dotenv.config(); // Load the environment variables from the .env file

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres', 
    url: process.env.DB_URL, 
    entities: [User, Admin, Testimony],
    migrations: [__dirname + '/migrations/*.ts'], // Specify the path to your migration files under src/migrations
    autoLoadEntities: true,
    synchronize: true,
};

export const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    });
export default typeOrmConfig;

