'use strict';
import { gql } from 'apollo-server-express';
import GraphQLDate from 'graphql-date';

export default gql`
    extend type Query {
        Audio(id: ID!): Audio
        Audios: [Audio]
    }

    type Audio {
        id: ID          
        url: String     
        title: String   
        artist: String  
        album: String   
        genre: String   
        date: String      
        artwork: String 
        duration: Float
    }

    extend type Mutation {
        AddAudio(           
            url: String!     
            title: String!   
            artist: String!  
            album: String!   
            genre: String!   
            date: String!      
            artwork: String! 
            duration: Float!
        ): Audio

        DeleteAudio(
            id: ID!
        ): String

        ModifyAudio(
            id: ID!          
            url: String   
            title: String   
            artist: String  
            album: String   
            genre: String   
            date: String      
            artwork: String 
            duration: Float  
        ): Audio
    }
`
