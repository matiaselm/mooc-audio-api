'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    uid: String,        // Anonymous uid of the current user
    name: String,       // Name of the user if they so want 
    progress: Number,   // Progress of current audio
    audio: { type: mongoose.Schema.Types.ObjectID, ref: 'ConnectionType' },      // Current audio listening to
    notes: [{ type: mongoose.Types.ObjectID, ref: 'Note' }]                      // Collection of bookmarks the user has taken
});

export default mongoose.model('User', userSchema);