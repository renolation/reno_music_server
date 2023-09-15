import {Module} from '@nestjs/common';
import {PlaylistService} from './playlist.service';
import {PlaylistController} from './playlist.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Audio} from "../audio/entities/audio.entity";
import {Playlist} from "./entities/playlist.entity";
import {AudioModule} from "../audio/audio.module";

@Module({
    imports: [

        TypeOrmModule.forFeature([Playlist, Audio]),
    ],
    controllers: [PlaylistController],
    providers: [PlaylistService],
    exports: [PlaylistModule]
})
export class PlaylistModule {
}
