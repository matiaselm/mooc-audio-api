'use strict';
import { gql } from 'apollo-server-express';

export default gql`
    extend type Query {
        Note(id: ID!): Note
        Notes(userID: ID!): [Note]
    }

    type Note {
        id: ID
        timestamp: Float
        data: String         
        audioID: Audio        
        userID: User
    }

    extend type Mutation {
        DeleteNote(
            id: ID!
        ): String

        AddNote(
            timestamp: Float!
            data: String!         
            audioID: String!           
            userID: String!
        ): String

        ModifyNote(
            id: ID!
            data: String!
        ): Note
    }
`