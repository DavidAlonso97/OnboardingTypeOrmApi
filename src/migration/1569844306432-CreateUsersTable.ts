import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1569844306432 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "ID",
                    type: "int",
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "nickName",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false
                },
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("users");
    }

}
