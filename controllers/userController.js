'use strict';
import user from '../models/User.js';

const user_post = async (req, res) => {
    try {
        const post = await user.create({
            name: req.body.name,
            progress: null,
            audio: null,
            notes: null
        });
        res.status(200).json(`user created with id ${post._id}`)
    } catch (e) {
        res.status(400).send(e.message)
    }
};

const user_get = async (req, res) => {
    try {
        await user.findById(req.params.id).then((user) => {
            res.status(200).send(user)
        })
    }
    catch (e) {
        res.status(400).send(e)
    }
};

const user_modify = async (req, res) => {
    try {
        await user.findOneAndUpdate({ _id: req.params.id },
            {
                name: req.body.name,            // If the user wants to have a name in app
                progress: req.body.progress,    // Progress of current audio episode, number
                audio: req.body.audio,          // ID of current audio listening to
            }).then((user) => {
                res.status(200).json(user)
            })
    } catch (error) {
        res.status(400).json(error)
    }
};

export {
    user_post,
    user_get,
    user_modify
};