import {parse} from "path";
import {Injectable} from "@nestjs/common";
import {File} from "../core/file.interface";
import {s3} from "../core/constants";

@Injectable()
export class FileService {

    constructor(

    ) {
    }

    setFilenameTimestamp(uploadedFile: File, timestamp: number): string {
        const fileName = parse(uploadedFile.originalname);
        return `${fileName.name.replace(/\s+/g, '-')}_${timestamp}${fileName.ext}`;
    }

    setFilename(uploadedFile: File): string {
        const fileName = parse(uploadedFile.originalname);
        return `${fileName.name.replace(/\s+/g, '-')}${fileName.ext}`;
    }


    //region upload file
    async uploadFile(file: File, folder: String){
        const uploadResult = await s3.upload( {
            ACL:'public-read',
            Bucket: folder,
            Body: file.buffer,
            Key: file.originalname,
            ContentType: file.mimetype,
        })
            .promise();
        return uploadResult['Location'];
    }
    //endregion

}