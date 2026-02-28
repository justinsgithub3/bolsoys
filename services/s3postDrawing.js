import { S3Client, ListObjectsV2Command, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// assigning environment variables
const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_KEY = process.env.SECRET_KEY;
const BUCKET_NAME = process.env.BUCKET_NAME;
const REGION = process.env.REGION;
// create s3 client based off of environment variables
const s3Client = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY
  },
});

// drawingBuf is a buffer of the file
export async function postDrawing(drawingBuf) {
  // create unique id with date time and math
  const uniqueId = Date.now() + Math.random().toString(36);
  try {
    await s3Client.send(new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: `drawings/${uniqueId}_drawing.PNG`,
      Body: drawingBuf.buffer,
      ContentType: 'image/png'
    }));
  } 
  catch (e) {
    console.log("Error: " + e);
  }
}