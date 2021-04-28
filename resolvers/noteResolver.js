'use strict';
import Note from "../models/Note.js";

export default {
    Note: (parent) => {
        return Note.findById(parent)
    },
    Mutation: {
        Delete: async (_, args) => {
            return Note.findByIdAndDelete(args.id)
        }
    }
}