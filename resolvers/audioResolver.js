'use strict';
import { query } from "express";
import Audio from "../models/Audio.js";
import checkAuth from '../passport/authenticate.js';

export default {
    Query: {
        Audios: async () => {
            try {
                return Audio.find().sort({ index: 1, title: 1 }).exec()
            } catch (e) {
                return e.message
            }
        },
        Audio: async (_, args) => {
            return Audio.findById(args.id)
        }
    },
    Mutation: {
        AddAudio: async (_, args, context) => {
            if(context.client) {
                try {
                    const { ...body } = args
                    const audio = { ...body }
                    console.log('New audio', audio);
                    const newAudio = new Audio(args).save();
                    return newAudio
                } catch (e) {
                    return e.message
                }
            } else return 'unauthorized';
        },
        DeleteAudio: async (_, args, context) => {
            if(context.client) {
                try {
                    await (await Audio.findByIdAndDelete(args.id)).save();
                    return `deleted audio ${args.id}`
                } catch (e) {
                    return e.message
                }
            } else return 'unauthorized';
        },
        ModifyAudio: async (_, args, context) => {
            if(context.client) {
                try {
                    const { id, ...body } = args
                    return await Audio.findByIdAndUpdate(id, { ...body }).save();
                } catch (e) {
                    console.error(e)
                    return e.message
                }
            } else return 'unauthorized';
        }
    }
}