'use strict';
import Note from "../models/Note.js";
import audio from '../models/Audio.js';
import checkAuth from '../passport/authenticate.js';

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
            // console.log('NOTES', args.userID)
            return Note.find({ userID: args.userID }).populate('audioID').exec();
        }
    },
    Mutation: {
        DeleteNote: async (_, args, context) => {
            if(context.client) {
                try {
                    Note.findByIdAndDelete(args.id)
                    return `note ${args.id} deleted`
                } catch (e) {
                    return e.message
                }
            } else return 'unauthorized';
        },
        AddNote: async (_, args, context) => {
            console.log('Context', context);
            if(context.client) {
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
            } else return 'unauthorized';
        },
        ModifyNote: async (_, args, context) => {
            if(context.client) {
                try {
                    const { id, ...body } = args
                    const modifiedNote = Note.findByIdAndUpdate(id, {
                        ...body
                    })
                    return modifiedNote
                } catch (e) {
                    console.log(e)
                    return e.message
                }
            } else return 'unauthorized';
        }
    }
}