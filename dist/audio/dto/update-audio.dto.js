"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAudioDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_audio_dto_1 = require("./create-audio.dto");
class UpdateAudioDto extends (0, mapped_types_1.PartialType)(create_audio_dto_1.CreateAudioDto) {
}
exports.UpdateAudioDto = UpdateAudioDto;
//# sourceMappingURL=update-audio.dto.js.map