'use strict';
import {gql} from 'apollo-server-express';

export default gql`
    type Note {
        _id: ID
        timestamp: Float
        data: String         
        audioID: Audio           
        userID: User
    }
`