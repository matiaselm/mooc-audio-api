'use strict';
import mongoose from 'mongoose';
import Double from '@mongoosejs/double';
const Schema = mongoose.Schema;

const audioSchema = new Schema({
    url: String,        // Load media from the network
    title: String,      // Large text that'll be shown on the device
    artist: String,     // The author of the audio
    album: String,      // The collection where the audio is from  
    genre: String,      // Don't know if this'll be shown
    date: Date,         // When uploaded to the internet
    artwork: String,    // The artwork that'll be shown if available   
    duration: Double,     // Duration in seconds unformatted
    index: Number       // index of the episode, used for ordering
});

export default mongoose.model('Audio', audioSchema);