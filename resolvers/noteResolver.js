'use strict';
import Note from "../models/Note.js";

export default {
    User: {
        Notes(parent) {
            return parent.notes.map(id => notes.findById(id).populate('audio'))
        },
    },
    Mutation: {
        Delete: async (_, args) => {
            return Note.findByIdAndDelete(args.id)
        }
    }
}