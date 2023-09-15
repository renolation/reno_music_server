import {IsNotEmpty, IsString} from "class-validator";

export class CreatePlaylistDto {

    @IsString()
    @IsNotEmpty()
    public title:  string;

    @IsString()
    @IsNotEmpty()
    public poster:  string;

    @IsString()
    @IsNotEmpty()
    public author:  string;

}
