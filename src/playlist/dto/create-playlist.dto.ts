import {IsNotEmpty, IsOptional, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreatePlaylistDto {

    @ApiProperty({required: true})
    @IsString()
    @IsNotEmpty()
    public title: string;

    @ApiProperty({default: null, required: false})
    @IsString()
    @IsOptional()
    public poster: string;

    @ApiProperty({default: null, required: false})
    @IsString()
    @IsOptional()
    public author: string;

}
