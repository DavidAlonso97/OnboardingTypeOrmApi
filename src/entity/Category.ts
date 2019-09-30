import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Category extends BaseEntity{

    @PrimaryGeneratedColumn()
    ID: number;
    
    @Column()
    name: string;
}
