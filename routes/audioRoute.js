import express from 'express';
const router = express.Router();
import {audio_list_get, audio_post} from '../controllers/audioController.js';

router.route('/')
    .get(audio_list_get)
    .post(audio_post);

export default router;