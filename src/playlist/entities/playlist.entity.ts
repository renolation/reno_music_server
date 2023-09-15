import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Playlist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    poster: string

    @Column()
    author: string



}
