import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Admin } from "src/admin/admin.entity";
import { User } from "src/user/user.entity";
import { UserRepository } from "src/user/user.repository";
import * as dotenv from 'dotenv';

dotenv.config(); // Load the environment variables from the .env file

export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres', 
    url: process.env.DB_URL, 
    entities: [User, Admin],
    synchronize: process.env.SYNCHRONIZE === 'false', // Parse SYNCHRONIZE as a boolean
};

export const SECRETKEY: string = process.env.SECRET_KEY;
export default SECRETKEY;
