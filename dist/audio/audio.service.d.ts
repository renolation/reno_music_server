import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';
export declare class AudioService {
    create(createAudioDto: CreateAudioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAudioDto: UpdateAudioDto): string;
    remove(id: number): string;
}
