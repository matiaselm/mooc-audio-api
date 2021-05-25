'use strict';
import Note from "../models/Note.js";
import Audio from "../models/Audio.js";
import User from "../models/User.js";
import checkAuth from '../passport/authenticate.js';

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
        DeleteUser: async (_, args, context) => {
            if(context.isLoggedIn) {
                return User.findByIdAndDelete(args.id)
            } else return 'unauthorized';
        },
        AddUser: async (_, args, context) => {
            if(context.isLoggedIn) {
                try {
                    const data = {
                        name: '',
                        audio: null,
                        language: 'en_EN',
                        notes: [null],
                        position: null
                    };
                    const newUser = new User(data);
                    const response = newUser.save();
                    return response;
                } catch (e) {
                    console.error(e)
                }
            } else return 'unauthorized';
        },
        ModifyUser: async (_, args, context) => {
            // console.log('MODIFY USER', JSON.stringify(args,'','\t'))
            if(context.isLoggedIn) {
                try {
                    const { id, ...data } = args
                    const modifiedUser = await User.findByIdAndUpdate(id,
                        {
                            ...data
                        });
                    return modifiedUser
                } catch (e) {
                    console.error(e)
                }
            } else return 'unauthorized';
        }
    },

}