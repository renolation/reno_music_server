
export const BUCKET = 'music-reno';


export const IMAGES = 'images';
export const FILES = 'files';
export const THUMBNAILS = 'thumbnails';

export const ACCESSKEY = '004a8f97aa7c9b90000000003';
export const SECRETKEY = 'K004FBN+My8vv7hP+5MRJYmp8W9BvIY';

const aws = require('aws-sdk');

aws.config.update({
    accessKeyId: ACCESSKEY,
    secretAccessKey: SECRETKEY
});

const spacesEndpoint = new aws.Endpoint('s3.us-west-004.backblazeb2.com');
export const s3 = new aws.S3({
    endpoint: spacesEndpoint
});