import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { storage } from './middleware/multer.upload';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { exec } from 'child_process';
import path from 'path';


const app = express();
const PORT = process.env.SERVER_PORT ? process.env.SERVER_PORT : 4000;

app.use(
    cors({
        origin: ['http://localhost:3000'],
        credentials: true
    })
);

const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("./uploads", express.static(path.join(__dirname, 'uploads')));



app.get('/', (req, res) => {
    console.log("Hello world!");
    res.send({
        msg: "server working",
    });
});

app.post('/uploads', upload.single('file'), (req, res) => {
    const lessonId = uuidv4();
    const videoPath = req.file?.path;
    const outputPath = path.join(__dirname, 'uploads', lessonId);
    const hlsPath = path.join(outputPath, 'index.m3u8');
    console.log("hlsPath", hlsPath);

    if(!fs.existsSync(outputPath)){
        fs.mkdirSync(outputPath, {
            recursive: true
        });
    };

    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;

    exec(ffmpegCommand, (error, stdout, stderr) => {
        if(error){
            console.log(`error: ${error.message}`);
        };
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        const videoURL = `http://localhost:${PORT}/uploads/${lessonId}/index.m3u8`;
        res.json({
            message: "video converted to hls format",
            videoURL: videoURL,
            lessonId: lessonId
        });
    }); 
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

