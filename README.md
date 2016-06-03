# Legends of Ping Pong [![Build Status](https://travis-ci.org/mrowles/legends-of-pingpong.svg?branch=master)](https://travis-ci.org/mrowles/legends-of-pingpong)

Ping Pong scoreboard managing app

## Contributors

* [mrowles](https://github.com/mrowles)
* jkelleher
* kchew
* [elliot-smith](https://github.com/elliot-smith)

## Requirements

* brew
* mongo
* node 4.4.5
* heroku toolkit

## Setup

### Database

Install Mongo:

```brew install mongodb```

Set environment variable (.zshrc, .bash_profile etc.):

```export MONGODB_URI="mongodb://localhost/lop-dev"```

#### Setup Guide

[Guide](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
 
if you see the this error
 
```Failed to connect to 127.0.0.1:27017, reason: errno:61 Connection refused```

run

```brew services start mongodb```

#### Create database:

```use lop-dev```

#### Create user:

```db.createUser({user: '<username>', pwd: '<password>', roles: ["readWrite"]});```

#### Insert row:

```db.players.insert({"firstname":"vrum", "lastname":"vrum", "email":"vrum@vrum.com"});```

### Setup App Dependencies

```npm install```

### Start App

This will start the application on [http://localhost:8765/](http://localhost:8765/)

```npm start```

This will start the application on [http://localhost:5000/](http://localhost:5000/)

```heroku local web```

### Run Tasks

```npm run [command]```

i.e., ```npm run css-build```

To see a list of all tasks:

```npm run```

#### Linting

Client: 

```npm run tslint```

Server:

```npm run eslint```
 
