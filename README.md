# Double Dragon (Legends of Ping Pong)

## Requirements

* mongo
* node 4.4.0

## Setup

### Database

```brew install mongodb```

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
```npm install -g tslint typescript```
```npm install -g eslint```

### Start App

```npm start```

This will start the application on [http://localhost:8765/](http://localhost:8765/)

### Run Tasks

```npm run [command]```

i.e., ```npm run build-css```

#### Linting

Client: 

```tslint client/**/*.ts -s node_modules/tslint-stylish -t stylish```

Server:

```eslint server/**/*.js```

