import express from 'express';
const router = express.Router();
import { user_get, user_post, user_modify, note_post } from '../controllers/userController.js';

router.route('/')
    .post(user_post);

router.route('/note')
    .post(note_post);

router.route('/:id')
    .get(user_get)
    .put(user_modify);

export default router;