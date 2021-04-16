'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    timestamp: Number,          // The bookmarks timestamp
    data: String,               // Whatever the user has written up from that part
    audioID: String,            // From what audio the note is from
    userID: String,             // Id of the user
});

export default mongoose.model('Note', noteSchema);