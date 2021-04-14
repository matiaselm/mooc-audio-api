'use strict';
import audio from '../models/Audio.js';

const audio_list_get = async (req, res) => {
    await audio.find().then((response, err) => {
        if (err) {
            return res.status(500).send({ error: err.message })
        } else {
            return res.status(200).json(response)
        }
    })
}

const audio_post = async (req, res) => {
    await audio.create({
        url: req.body.url, // Load media from the network
        title: req.body.title,
        artist: req.body.artist,
        album: req.body.album,
        genre: req.body.genre,
        date: req.body.date, // RFC 3339
        artwork: req.body.artwork, // Load artwork from the network
        duration: req.body.duration // Duration in seconds
    }).then((response, err) => {
        if (err) {
            res.status(400).send({ error: err.message })
        } else {
            res.status(200).send(`audio post ${response.title} created with id: ${response._id}`);
        }
    })
}

export { audio_list_get, audio_post }