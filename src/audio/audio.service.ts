import {Injectable} from '@nestjs/common';
import {CreateAudioDto} from './dto/create-audio.dto';
import {UpdateAudioDto} from './dto/update-audio.dto';
import {Audio} from "./entities/audio.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AudioService {

    constructor(
        @InjectRepository(Audio) private repo: Repository<Audio>,
    ) {
    }

    async create(audio: Audio) {
        audio.uploadDate = new Date(Date.now());

        const audioEntity = this.repo.create({
            ...audio,
        });
        await this.repo.save(audioEntity);
        return JSON.stringify(audioEntity);

    }

    async findAll() {
        return await this.repo.find();
    }

    async findOne(id: number) {
        return await this.repo.findOneBy({id: id});
    }

    update(id: number, updateAudioDto: UpdateAudioDto) {
        return `This action updates a #${id} audio`;
    }

    async remove(id: number) {
        const audio = await this.findOne(id);
        await this.repo.remove(audio);
        return JSON.stringify(audio);
    }
}
