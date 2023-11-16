const { S3Client, ListObjectsV2Command } = require("@aws-sdk/client-s3");
const fs = require('fs');

const region = "us-west-1"; // Define the region
const s3Client = new S3Client({ region: region });

async function listS3Objects() {
  const command = new ListObjectsV2Command({
    Bucket: "mylgcontent",
    Prefix: "32-Solo J/XL/"
  });

  try {
    const data = await s3Client.send(command);

    if (data.Contents && Array.isArray(data.Contents)) {
      const imageUrls = data.Contents.map((file) => {
        const encodedKey = file.Key.replace(/ /g, '+');
        return `https://${data.Name}.s3.${region}.amazonaws.com/${encodedKey}`;
      });

      fs.writeFile('imageUrls.json', JSON.stringify(imageUrls, null, 2), 'utf8', (err) => {
        if (err) {
          console.error('Error writing file:', err);
        } else {
          console.log('Successfully wrote image URLs to imageUrls.json');
        }
      });

      return imageUrls;
    } else {
      console.log('No files found');
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

listS3Objects().then((imageUrls) => console.log(imageUrls));
