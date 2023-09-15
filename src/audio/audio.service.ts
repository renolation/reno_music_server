import { Injectable } from '@nestjs/common';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import {Audio} from "./entities/audio.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AudioService {

  constructor(
      @InjectRepository(Audio) private repo: Repository<Audio>,

  ) {}

  async create(audio: Audio) {
    audio.uploadDate = new Date(Date.now());

    const audioEntity = this.repo.create({
      ...audio,
    });
    await this.repo.save(audioEntity);
    return JSON.stringify(audioEntity);

  }

  findAll() {
    return `This action returns all audio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audio`;
  }

  update(id: number, updateAudioDto: UpdateAudioDto) {
    return `This action updates a #${id} audio`;
  }

  remove(id: number) {
    return `This action removes a #${id} audio`;
  }
}
