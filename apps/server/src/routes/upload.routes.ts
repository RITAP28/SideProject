import express from 'express';
import { handleUploadVideo } from '../controllers/uploadService/upload.controller';
import multer from 'multer';
import { storage } from '../middleware/multer.upload';

const upload = multer({ storage: storage });

export default (router: express.Router) => {
    router.post('/pages/upload', upload.single('file'), handleUploadVideo);
};