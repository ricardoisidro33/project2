# Project 2

<br>



## Description
Search platform for NBA players informations and videos of best plays, create the favorite list of Players/Plays and teams, and leave reviews/comments on the plays.



<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault (BONUS)
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault (BONUS)
- **homepage** - As a user I want to be able to access the homepage and choose a team to get information about.
- **sign up** - As a user I want to sign up on the web page so that I can add favorite players/plays/teams to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and add or delete them.
- **reviews** - As a user I want to leave comments/reviews on plays.
- **players/team listing** - As a user I want to see details of the team/player I choose and be able to save it as favorites.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders all the teams view.                |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | { username, email, password  }                           |
| `GET`      | `/team/:id`                        | Display team info and team players                           |                                                          |
| `GET`      | `/player/:id`                      | Display players info and videos                              |                                                          |
| `POST`     | `/players/:id/comment`             | Add comments/Reviews on the players                          |                                                          |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  favorites: [FavoriteId], (BONUS)
}

```

Player model

```javascript
{
  img: 
  name: String,
  height: Number,
  weight: Number,
  age: Number,
  position: String,
  favorites: [FavoriteId], (BONUS)
}

```

Team model

```javascript
{
  name: String,
  conference: String,
  division: String,
  foundationyear: Number,
}

```



Favorites model (BONUS)

```javascript
{
  placeId: String,
}

```



<br>



## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
Ricardo Isidro - [`<ricardoisidro33>`](https://github.com/ricardoisidro33)) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/ricardoisidro/)
<br>
Gonçalo Arsénio - [`<goncaloarsenio>`](https://github.com/goncaloarsenio) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/goncalo-arsenio-/)
