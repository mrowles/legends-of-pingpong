# Double Dragon (Legends of Ping Pong)

## Setup

### Database

```brew install mongodb```

#### Setup Guide

[Guide](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
 
#### Create database:

```use lop-dev```

#### Create user:

```db.createUser({user: '<username>', pwd: '<password>', roles: ["readWrite"]});```

#### Insert row:

```db.players.insert({"firstname":"vrum", "lastname":"vrum", "email":"vrum@vrum.com"});```

### Node

```npm install```

### Run

```npm start```
