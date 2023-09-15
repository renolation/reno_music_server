import {Module} from '@nestjs/common';
import {AudioService} from './audio.service';
import {AudioController} from './audio.controller';
import {Audio} from "./entities/audio.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([Audio]),
    ],
    controllers: [AudioController],
    providers: [AudioService]
})
export class AudioModule {
}
