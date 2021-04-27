'use strict';
import audioSchema from './audioSchema.js'
import userSchema from './userSchema.js'
import noteSchema from './noteSchema.js'
import {gql} from 'apollo-server-express';

const linkSchema = gql`
   type Query {
     _: Boolean
   }
   type Mutation {
     _: Boolean
   }
`;

export default [
    linkSchema,
    audioSchema,
    userSchema,
    noteSchema
];