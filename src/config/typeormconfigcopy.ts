import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/user/user.entity";


export const TypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost/host-name',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'databse',
    entities: [User],
    synchronize: true, //set to false on production
  };