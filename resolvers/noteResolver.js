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
            try{
                Note.findByIdAndDelete(args.id)
                return `note ${args.id} deleted`
            } catch(e){
                return e.message
            }
        },
        AddNote: async (_, args) => {
            try {
                const note = await Note.create({
                    timestamp: args.timestamp,
                    data: args.data,
                    audioID: args.audioID,
                    userID: args.userID
                })
                return `Note ${note.data} ${note.id} created for user ${note.userID}`
            } catch (e) {
                return e.message
            }
        }
    }
}