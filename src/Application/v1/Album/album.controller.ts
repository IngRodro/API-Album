import {Request, Response} from 'express';
import AlbumModel from './album.model';
import { uploadFile } from '../../../Utils/uploadFile';

export const getAllImages = async (req: Request, res: Response) => {
  const { offset, limit } = req.params;

  try {
    const data = await AlbumModel.find().skip(Number(offset)).limit(Number(limit));
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
}

export const addImage = async (req: Request, res: Response) => {
  const {files} = req;

  if (!files) {
    return res.status(400).json({
      message: 'No se ha seleccionado ninguna imagen',
      code: 400,
    });
  }
  try {
    const result = await uploadFile(files.Image, 'album');
    const image = {
      url: result.secure_url,
      public_id: result.public_id,
    }
    const data = await AlbumModel.create({ image });
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error al obtener los datos',
      code: 500,
    });
  }
}
