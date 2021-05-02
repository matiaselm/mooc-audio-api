'use strict';
import Note from "../models/Note.js";
import audio from '../models/Audio.js';

export default {
    User: {
        notes: (parent) => {
            const response = Note.find({ userID: parent })
            .populate('audioID').exec()
            return response
        }
    },
    Query: {
        Note: async (_, args) => {
            return Note.find();
        },
        Notes: async (_, args) => {
            console.log('NOTES', args.userID)
            return Note.find({ userID: args.userID });
        }
    },
    Mutation: {
        DeleteNote: async (_, args) => {
            try {
                Note.findByIdAndDelete(args.id)
                return `note ${args.id} deleted`
            } catch (e) {
                return e.message
            }
        },
        AddNote: async (_, args) => {
            console.log('addnote', JSON.stringify(args))
            try {
                const note = await Note.create({
                    timestamp: args.timestamp,
                    data: args.data,
                    audioID: args.audioID,
                    userID: args.userID
                })
                return `Note ${note.data} ${note.id} created for user ${note.userID}`
            } catch (e) {
                console.log(e)
                return e.message
            }
        }
    }
}