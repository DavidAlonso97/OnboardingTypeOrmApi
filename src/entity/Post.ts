import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne} from "typeorm";
import {User} from "./User";
import {Category} from "./Category";

@Entity()
export class Post extends BaseEntity{

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(type => User, user => user.posts)
    craftedBy: User;

    @ManyToOne(type => Category)
    category: Category;
}
