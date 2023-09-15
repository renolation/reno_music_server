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
import {AudioService} from './audio.service';
import {CreateAudioDto} from './dto/create-audio.dto';
import {UpdateAudioDto} from './dto/update-audio.dto';
import {ApiConsumes, ApiTags} from "@nestjs/swagger";
import {FileFieldsInterceptor} from "@nestjs/platform-express";
import {Audio} from "./entities/audio.entity";
import {FileService} from "./file.service";
import { BUCKET, FILES} from "../core/constants";
import {File} from "../core/file.interface";

@Controller('audio')
@ApiTags('audio')
export class AudioController {
    constructor(
        private readonly audioService: AudioService,
        private readonly fileService: FileService,
    ) {
    }

    @Post()
    @UseInterceptors(FileFieldsInterceptor(
        [{name: 'file', maxCount: 1},
            {name: 'poster', maxCount: 3},],
    ))
    @ApiConsumes('multipart/form-data')
    async create(
        @Body() createAudioDto: CreateAudioDto,
        @UploadedFiles() files: { file?: File[], poster?: File[] }
    ) {

        const audio = new Audio();
        Object.assign(audio, createAudioDto);

        if (!files['file']) {
            throw new NotFoundException('File must be specified');
        }
        if (!files['poster']) {
            throw new NotFoundException('Thumbnail must be specified');
        }
        const fileUrl = await this.fileService.uploadFile(files['file'][0], BUCKET  + '/' + FILES);
        const posterUrl = await this.fileService.uploadFile(files['poster'][0], BUCKET  + '/' + FILES);
        audio.fileUrl = fileUrl;
        audio.posterUrl = posterUrl;
        return await this.audioService.create(audio);
    }

    @Get()
    async findAll() {
        return await this.audioService.findAll();
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
  async remove(@Param('id') id: string) {
    return await this.audioService.remove(+id);
  }
}
