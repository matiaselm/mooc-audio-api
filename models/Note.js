'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const noteSchema = new Schema({
    audio: { type: mongoose.Schema.types.ObjectID, ref: 'Audio' },  // From what audio the note is from
    timestamp: Number,                                              // The bookmarks timestamp
    data: String                                                    // Whatever the user has written up from that part
});

export default mongoose.model('Note', noteSchema);