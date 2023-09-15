import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  NotFoundException
} from '@nestjs/common';
import { AudioService } from './audio.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
import {ApiConsumes, ApiTags} from "@nestjs/swagger";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {Audio} from "./entities/audio.entity";

@Controller('audio')
@ApiTags('audio')
export class AudioController {
  constructor(private readonly audioService: AudioService) {}

  @Post()
  @UseInterceptors(FileFieldsInterceptor(
      [{name: 'file', maxCount: 1},
        {name: 'poster', maxCount: 3},],
  ))
  @ApiConsumes('multipart/form-data')
  async create(
      @Body() createAudioDto: CreateAudioDto,
      @UploadedFiles() files: { file?: File[],  poster?: File[] }
  ) {

    const audio = new Audio();
    Object.assign(audio, createAudioDto);

    if (!files['file']) {
      throw new NotFoundException('File must be specified');
    }
    if (!files['poster']) {
      throw new NotFoundException('Thumbnail must be specified');
    }

    audio.fileUrl = 'aaa';
    audio.posterUrl = 'aaa';


    return await this.audioService.create(audio);
  }

  @Get()
  findAll() {
    return this.audioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.audioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAudioDto: UpdateAudioDto) {
    return this.audioService.update(+id, updateAudioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.audioService.remove(+id);
  }
}
