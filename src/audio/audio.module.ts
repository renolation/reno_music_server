import {Module} from '@nestjs/common';
import {AudioService} from './audio.service';
import {AudioController} from './audio.controller';
import {Audio} from "./entities/audio.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PlaylistModule} from "../playlist/playlist.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Audio]),
    ],
    controllers: [AudioController],
    providers: [AudioService],
    exports: [AudioService]
})
export class AudioModule {
}
