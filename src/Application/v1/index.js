import express from 'express';
import albumRoutes from './Album/album.route';

const router = express.Router();

router.use('/album', albumRoutes);

export default router;
