import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePostTable1569844542818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "posts",
            columns: [
                {
                    name: "ID",
                    type: "int",
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "title",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: "text",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false
                },
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("posts");
    }

}
