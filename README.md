# MOOC AUDIO - API

The backend for the [mooc audio app](https://github.com/matiaselm/mooc-audio-app), not all requests are listed yet

[API-URL](http://matiasjj.jelastic.metropolia.fi)

## The database has 3 collections:

 - Audios
 - Users
 - Notes

## Example requests - user

 - get user by id with notes and audio data
```
query{
    User(id: ID!){
        id
        name
        notes{
            data
        }
        audio{
            title
        }
    }
}
```

 - add user; doesn't take parameters, are later added with modify if wanted
```
mutation{
    AddUser{
        id
        name
        language
        audio{
            title
        }
        notes{
            data
        }
    }
}

````
 - modify user by id; language should be 'fi_FI' or 'en_EN' 
``` 
mutation{
    ModifyUser(id: ID!
                name: String
                language: String){
        id
        name
        language
    }
}
```

## example queries, audio

 - Get all audios
```
query{
    Audios{
        id
        url
        title
        artist
        album
        genre
        date
        artwork
        duration
        index
    }
}
```

## example queries, notes

 - add note; response is a string message
```
mutation{
    AddNote(
            timestamp: Float!
            data: String!         
            audioID: String!           
            userID: String!
        )
}
```

 - get all notes by user id
```
query{
    Notes(userID: ID!){
        id
        data
        timestamp
        audioID{
            title
        }
    }
}
```

 - modify note with id; returns modified note and corresponding audio data
```
mutation{
    ModifyNote(id: ID!, data: String!){
        id
        data
        timestamp
        audioID{
            title
        }
    }
}
```
