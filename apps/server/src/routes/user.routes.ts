import express from 'express';
import uploadRoutes from './upload.routes';

const router = express.Router();

export default (): express.Router => {
    uploadRoutes(router);
    return router;
};


