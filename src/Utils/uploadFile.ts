import { v2 } from 'cloudinary'
import fs from 'fs';
import getConfig from '../config';

const { cloudFile } = getConfig()
const { cloudName, apiKey, apiSecret } = cloudFile;
v2.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });


export const uploadFile = async (file: any, folder: string) => {
  const result = await v2.uploader.upload(file.tempFilePath, { folder })
  fs.unlinkSync(file.tempFilePath);
  return result;
}

export const deleteFile = async (publicId: string) => {
  await v2.uploader.destroy(publicId);
}
