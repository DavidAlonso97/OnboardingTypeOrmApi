import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategoryTable1569844558622 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [
                {
                    name: "ID",
                    type: "int",
                    generationStrategy: 'increment',
                    isPrimary: true,
                    isGenerated: true,
                },
                {
                    name: "name",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false
                },
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("categories");
    }
}
