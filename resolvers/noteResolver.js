'use strict';
import Note from "../models/Note.js";

export default {
    Note: (parent) => {
        return Note.find({ userID: parent })
    },
    Query: {
        Note: async (_, args) => {
            return Note.find();
        },
        Notes: async (_, args) => {
            return Note.find({ userID: args.userID });
        }
    },
    Mutation: {
        DeleteNote: async (_, args) => {
            return Note.findByIdAndDelete(args.id)
        },
        AddNote: async (_, args) => {
            try {
                await Note.create({
                    timestamp: args.timestamp,
                    data: args.data,
                    audioID: args.audioID,
                    userID: args.userID
                })
                return `Note ${args.data} for user ${args.userID}`
            } catch (e) {
                return e.message
            }
        }
    }
}