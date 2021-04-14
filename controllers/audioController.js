'use strict';
import audio from '../models/Audio.js';

const audio_list_get = async (req, res) => {
    try {
        return res.status(200).send(audio.find())
    } catch (e) {
        return res.status(500).send({ error: e.message })
    }
}

const audio_post = async (req, res) => {
    try {
        const post = await audio.create({
            url: req.body.url, // Load media from the network
            title: req.body.title,
            artist: req.body.artist,
            album: req.body.album,
            genre: req.body.genre,
            date: req.body.date, // RFC 3339
            artwork: req.body.artwork, // Load artwork from the network
            duration: req.body.duration // Duration in seconds
        })
    } catch (e) {

    }
}