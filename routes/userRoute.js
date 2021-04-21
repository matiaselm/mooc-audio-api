import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

router.route('/')
    .post(userController.user_post);

router.route('/note')
    .post(userController.note_post)
    .get(userController.note_list_get);

router.route('/note/:id')
    .get(userController.note_get);

router.route('/:id')
    .get(userController.user_get)
    .put(userController.user_modify);

export default router;