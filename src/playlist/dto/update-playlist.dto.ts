import {PartialType} from '@nestjs/mapped-types';
import {CreatePlaylistDto} from './create-playlist.dto';
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class UpdatePlaylistDto extends PartialType(CreatePlaylistDto) {

    @ApiProperty()
    @IsString()
    @IsOptional()
    public title: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    public poster: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    public author: string;
}
