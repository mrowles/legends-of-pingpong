# Double Dragon (Legends of Ping Pong)

## Setup

### Database

```brew install mongodb```

#### Setup Guide

[Guide](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
 
#### Create database:

```use <db name>```

#### Create user:

```db.createUser({user: '<username>', pwd: '<password>', roles: ["readWrite"]});```

#### Insert row:

```db.player.insert({"firstname":"vrum", "surname":"vrum"});```

### Node

```npm install```

### Run

```npm start```
