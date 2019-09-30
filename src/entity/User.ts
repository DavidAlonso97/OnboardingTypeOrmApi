import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany} from "typeorm";
import {Post} from "./Post";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    ID: number;

    @Column()
    nickName: string;

    @OneToMany(type => Post, post => post.craftedBy)
    posts: Post[];
}
