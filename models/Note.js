'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    timestamp: Number,          // The bookmarks timestamp
    data: String,               // Whatever the user has written up from that part
    audioID: {
        type: Schema.Types.ObjectID,    // Id of the user
        ref: 'Audio'
    },            // From what audio the note is from
    userID: {
        type: Schema.Types.ObjectID,    // Id of the user
        ref: 'User'
    }            
});

export default mongoose.model('Note', noteSchema);