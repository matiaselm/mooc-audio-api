'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    extend type Query {
        User: User
        Users: [User]
    }
    
    type User {
        _id: ID!
        name: String
        position: Float
        audio: Audio   
        notes: [Note]      
    }

    input notes {
        _id: ID
        timestamp: Float
        data: String         
        audioID: String          
        userID: String
    }

    extend type Mutation {
        Delete(
            _id: ID
        ): String

        AddUser(
            name: String
            audio: Audio
            notes: [Note]
            position: Float
        ): User

        ModifyUser(
            name: String
            audio: Audio
            notes: [Note]
            position: Float
        ): User
    }
`