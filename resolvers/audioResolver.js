'use strict';
import { query } from "express";
import Audio from "../models/Audio.js";

export default {
    Query: {
        Audios: async () => {
            try {
                return Audio.find()
            } catch (e) {
                return e.message
            }
        },
        Audio: async (_, args) => {
            return Audio.findById(args.id)
        }
    },
    Mutation: {
        AddAudio: async (_, args) => {
            try {
                const { ...body } = args
                const audio = { ...body }
                console.log('New audio', audio);
                const newAudio = new Audio(args).save();
                return newAudio
            } catch (e) {
                return e.message
            }
        },
        DeleteAudio: async (_, args) => {
            return Audio.findByIdAndDelete(args.id)
        },
        ModifyAudio: async (_, args) => {
            try {
                const { id, ...body } = args
                return await Audio.findByIdAndUpdate(id, { ...body }).save();
            } catch (e) {
                console.error(e)
                return e.message
            }
        }
    }
}