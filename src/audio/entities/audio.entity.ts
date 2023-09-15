import {
    Column,
    DeleteDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Playlist} from "../../playlist/entities/playlist.entity";

@Entity()
export class Audio {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    posterUrl: string

    @Column()
    fileUrl: string

    @Column({nullable: true})
    artist: string

    @Column({nullable: true})
    album: string

    @Column("text", { array: true, nullable: true})
    genre: string[]


    @Column({default: 0})
    duration: number

    @Column({ type: 'timestamptz' })
    public uploadDate: Date;

    @UpdateDateColumn()
    public updatedDate: Date;

    @DeleteDateColumn({nullable: true})
    deletedAt?: Date;

}
