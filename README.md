# Fortnite Stats Node.js APP

![enter image description here](https://i.imgur.com/zl5DiHC.png)


## Intro

A Node.js app that uses Fortnite API to create sortable scoreboard.

[Live Demo](https://fortnite-tracker-srdja.herokuapp.com/)

### Screenshot

![image](https://user-images.githubusercontent.com/53865216/82270393-f9894380-9974-11ea-8814-3e0a59ba51de.png)

## Getting Started

Here is on how to get started with this Node.js Fortnite tracker on your server

### Prerequisites

```
 - A server that can run Node.js
 - FortniteTracker API key
```

FortniteTracker API key can be created here [https://fortnitetracker.com/site-api](https://fortnitetracker.com/site-api)

### Installing

    $ npm install
    
    $ node app.js
    
App will start on localhost:3000

### Adding your nick names and API key

```javascript
// App.js Line 8
var  nicks  = ["Nick1", "Nick2", "Nick3"];
//Here you put array of Fortnite nick names. Nick names must be valid in 
//order to show
```

```javascript
// App.js Line 18
headers: {
"TRN-Api-Key":  "API_KEY_HERE"
},
```
Save and run the app!

## Built With

 - Node.js
 - Express
 - Request
 - .ejs templating


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
