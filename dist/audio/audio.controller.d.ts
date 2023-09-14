import { AudioService } from './audio.service';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
export declare class AudioController {
    private readonly audioService;
    constructor(audioService: AudioService);
    create(createAudioDto: CreateAudioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAudioDto: UpdateAudioDto): string;
    remove(id: string): string;
}
