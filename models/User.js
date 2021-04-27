'use strict';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,       // Name of the user if they so want 
    position: Number,   // Position of current audio
    audio: { type: Schema.Types.ObjectID, ref: 'Audio' },      // Current audio listening to
    notes: [{ type: Schema.Types.ObjectID, ref: 'Note' }]      // Collection of bookmarks the user has taken
});

export default mongoose.model('User', userSchema);