'use strict';
import user from '../models/User.js';
import note from '../models/Note.js';
import audio from '../models/Audio.js';

const user_post = async (req, res) => {
    try {
        const post = await user.create({
            name: req.body.name,
            progress: null,
            audio: null,
            notes: null
        });
        console.log('New user added: ', post._id)
        return res.status(200).json(post)
    } catch (e) {
        res.status(500).send(e.message)
    }
};

const user_get = async (req, res) => {
    try {
        await user.findById(req.params.id).then((user) => {
            res.status(200).send(user)
        })
    }
    catch (e) {
        res.status(500).send(e)
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
        res.status(500).json(error)
    }
};

const note_post = async (req, res) => {
    try {
        const post = await note.create({
            timestamp: req.body.timestamp,      // The bookmarks timestamp
            data: req.body.data,                // Whatever the user has written up from that part
            audioID: req.body.audioID,          // From what audio the note is from
            userID: req.body.userID             // Id of the user
        })
        res.status(200).json(`note "${post.data}" for user ${post.userID}`)
    } catch (e) {
        res.status(500).json(e)
    }
}

const note_list_get = async (req, res) => {
    console.log('User id: ', req.query.userID)
    note.find({ userID: req.query.userID })
        .populate({ path: 'audioID', model: audio })
        .exec((e, response) => {
            if (e) {
                console.error(e.message)
                res.status(400).json(e)
            } else {
                // console.log('Response: ', response)
                res.status(200).json(response)
            }
        })
}

const note_get = async (req, res) => {
    try {
        await note.findById(req.params.id).then((note) => {
            res.status(200).json(note)
        })
    } catch (e) {
        res.status(400).json(e)
    }
}

export default {
    user_post,
    user_get,
    user_modify,
    note_post,
    note_get,
    note_list_get,
};