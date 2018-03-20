# about-photos-component

[![CircleCI](https://circleci.com/gh/thesilverspoon/about-photos-component/tree/master.svg?style=svg)](https://circleci.com/gh/thesilverspoon/about-photos-component/tree/master)
 
About photos component

## Getting Started
```
These instructions will get you a copy of this repo up and running on your local project. 
```
### Prereqs
What things you need to have installed and how to install them
```
-MongoDB
-NodeJS
```
### Installing
To install mongodb,

```
brew install mongodb
```


### Clone
```
git clone <repo>
```

### Once Cloned

To install the dependencies:
```
npm install
```

To run the server:
```
npm run server
```

To seed the data, make sure the collection is empty before running this script. 
```
npm run seed-data
```

To build webpack in dev:
```
npm run dev
```

To build webpack for production:
```
npm run build-prod
```
Component should be available on http://localhost:3004


### Other Useful Commands
```
cli cmds: 
knex migrate:make restaurants_and_imgs_tables
knex seed:make 01_restaurants


knex migrate:rollback
knex migrate:latest
knex seed:run

psql
List of useful psql commands

\?   // help
\q   // quit
\l   // list databases
\dt  // show tables
\dt <name>
\i <filename> // run filename with commands
select * from restaurants;
select * from reservations;



\copy restaurant from 'db/csv/restaurantsInfo.csv' csv;
\copy imgs from 'db/csv/imgs.csv' csv;
ALTER TABLE imgs add foreign key (restaurant_id) references restaurant (id);

explain analyze select * from restaurant where name  = 'voluptatem sapiente quos';
CREATE INDEX on restaurant (name);

```


[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
