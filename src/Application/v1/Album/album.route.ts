import { Router } from 'express';
import fileUpload from 'express-fileupload'
import { getAllImages, addImage } from './album.controller';

const router = Router();

router.get('/', getAllImages);
router.post('/',fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  preservePath: true,
  useTempFiles: true,
  tempFileDir: './tmp',
}), addImage);

export default router;
