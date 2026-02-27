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

// call function with no args.
// function returns object with .length with the number of drawings and .drawings with an array of drawings
// if error occurs, an empty array will be returned
export async function getAllDrawings(){
  try {
    // List all objects under 'drawings/' prefix
    const listCommand = new ListObjectsV2Command({
      Bucket: BUCKET_NAME,
      Prefix: "drawings/",
    });

    const listResponse = await s3Client.send(listCommand);

    // this is reversed so the drawings are loaded from the most recent first
    const objects = (listResponse.Contents || [])
      .filter(item => item.Key !== "drawings/") 
      .reverse();

    const selectedObjects = objects.slice(0);
    
    // listResponse.Contents is an array of objects in the prefix
    const urls = await Promise.all(
      selectedObjects.map(async (item) => {
        const command = new GetObjectCommand({
          Bucket: BUCKET_NAME,
          Key: item.Key,
        });
        const url = await getSignedUrl(s3Client, command, { expiresIn: 1000 });
        return url;
      })
    );
  
    // logging number of drawings
    console.log(urls.length);

    // put drawings sources into data object
    const dataArray =
    {
      length: urls.length,
      drawings: urls
    };
    console.log(dataArray[0]);
    return dataArray;
  }
  catch (e) {
    console.log("Error: " + e);
    return [];
  }
}