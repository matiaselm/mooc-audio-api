'use strict';
import Note from "../models/Note.js";
import Audio from "../models/Audio.js";
import User from "../models/User.js";

export default {
    Query: {
        Users: async (_, args) => {
            return User.find()
        },
        User: async (_, args) => {
            return User.findById(args.id)
        }
    },
    Mutation: {
        Delete: async (_, args) => {
            return User.findByIdAndDelete(args.id)
        },
        AddUser: async (_, args) => {
            try {
                const data = {
                    name: args.name,
                    audio: args.audio,
                    notes: [args.note],
                    position: null
                };
                const newUser = new User(data);
                const response = newUser.save();
                return response;
            } catch (e) {
                return e
            }
        },
        ModifyUser: async (_, args) => {
            try {
                const { id, ...data } = args
                const modifiedUser = await User.findByIdAndUpdate(id, { ...data }).save();
                return modifiedUser
            } catch (e) {
                return e
            }
        }
    },

}