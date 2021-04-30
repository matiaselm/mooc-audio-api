'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        User(id: ID!): User
        Users: [User]
    }
    
    type User {
        id: ID!
        name: String
        position: Float
        audio: Audio   
        notes: [Note]      
    }

    input AudioInput {           
        url: String,     
        title: String,   
        artist: String,  
        album: String,   
        genre: String,   
        date: String,      
        artwork: String, 
        duration: Float 
    }

    input NoteInput {
        timestamp: Float
        data: String         
        audioID: String           
        userID: String
    }

    extend type Mutation {
        DeleteUser(
            id: ID
        ): String

        AddUser(
            name: String
            audio: AudioInput
            notes: [NoteInput]
            position: Float
        ): User

        ModifyUser(
            name: String
            audio: AudioInput
            notes: [NoteInput]
            position: Float
        ): User
    }
`