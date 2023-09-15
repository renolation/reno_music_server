import { ApiProperty } from "@nestjs/swagger";
import {Transform, Type} from "class-transformer";
import {
    IsArray,
    IsNotEmpty, IsNumber,
    IsOptional,
    IsString,
} from "class-validator";
export class CreateAudioDto {

    @ApiProperty({required: true})
    @IsString()
    @IsNotEmpty()
    public title:  string;

    @ApiProperty({ type: 'string', format: 'binary', required: true })
    poster: Express.Multer.File

    @ApiProperty({ type: 'string', format: 'binary', required: true })
    file: Express.Multer.File

    @ApiProperty()
    @IsString()
    public artist:  string;

    @ApiProperty({required: false})
    @IsString()
    public album:  string;

    @ApiProperty({ isArray: true, type: String, required: false })
    @Transform(({ value }) => (Array.isArray(value) ? value : Array(value)))
    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    genre: string[];

    @ApiProperty({required: false})
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    duration: number;

}
