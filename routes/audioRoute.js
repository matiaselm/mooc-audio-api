import express from 'express';
const router = express.Router();
import audioController from '../controllers/audioController.js';

router.route('/')
    .get(audioController.audio_list_get)
    .post(audioController.audio_post);