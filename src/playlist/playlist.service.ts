import {Injectable} from '@nestjs/common';
import {CreatePlaylistDto} from './dto/create-playlist.dto';
import {UpdatePlaylistDto} from './dto/update-playlist.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Audio} from "../audio/entities/audio.entity";
import {Repository} from "typeorm";
import {Playlist} from "./entities/playlist.entity";

@Injectable()
export class PlaylistService {

    constructor(
        @InjectRepository(Playlist) private repo: Repository<Playlist>,
        @InjectRepository(Audio) private repoAudio: Repository<Audio>,
    ) {
    }

    async create(createPlaylistDto: CreatePlaylistDto) {
        const playlist = this.repo.create({
            ...createPlaylistDto,
        });
        await this.repo.save(playlist);
        return JSON.stringify(playlist);
    }

    async addSong(id: number, audioId: number) {
        const audio = await this.repoAudio.findOneBy({
            id: audioId
        });
        const playlist = await this.repo.findOne({
            where : {
                id: id,
            },
            relations: {
                songs: true
            }
        });
        if (!audio || !playlist) {
            throw new Error('Audio or Playlist not found');
        }
        playlist.songs.push(audio);
        await this.repo.save(playlist);
        return JSON.stringify(playlist);
    }

    async findAll() {
        return await this.repo.find({
            relations: {
                songs: true
            }
        });
    }

    async findOne(id: number) {
        return await this.repo.findOne({
            where : {
                id: id,
            },
            relations: {
                songs: true
            }
        });
    }

    update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
        return `This action updates a #${id} playlist`;
    }

    remove(id: number) {
        return `This action removes a #${id} playlist`;
    }
}
