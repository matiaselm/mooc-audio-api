'use strict';
import { gql } from 'apollo-server-express';
import GraphQLDate from 'graphql-date';

export default gql`
    extend type Query {
        Audio: Audio
        Audios: [Audio]
    }

    type Audio {
        _id: ID,            
        url: String,     
        title: String,   
        artist: String,  
        album: String,   
        genre: String,   
        date: String,      
        artwork: String, 
        duration: Float
    }

    extend type Mutation {
        AddAudio(           
            url: String!,     
            title: String!,   
            artist: String!,  
            album: String!,   
            genre: String!,   
            date: String!,      
            artwork: String!, 
            duration: Float!
        ): Audio

        DeleteAudio(
            _id: ID
        ): String

        ModifyAudio(          
            url: String,     
            title: String,   
            artist: String,  
            album: String,   
            genre: String,   
            date: String,      
            artwork: String, 
            duration: Float  
        ): Audio
    }
`
