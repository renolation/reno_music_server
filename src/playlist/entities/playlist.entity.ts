import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Audio} from "../../audio/entities/audio.entity";

@Entity()
export class Playlist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column({nullable: true})
    poster: string

    @Column({nullable: true})
    author: string

    @ManyToMany(() => Audio)
    @JoinTable()
    songs: Audio[]

}
