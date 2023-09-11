import { MigrationInterface, QueryRunner } from "typeorm";

export class Testimonytable1693574955848 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    //     await queryRunner.query(`
    //       CREATE TABLE testimonies (
    //         id SERIAL PRIMARY KEY,
    //         name TEXT NOT NULL,
    //         testimony TEXT NOT NULL,
    //         phone TEXT,
    //         event_edition TEXT,
    //         is_anonymous BOOLEAN NOT NULL DEFAULT false
    //       );
    //     `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE testimonies`);
    }

}