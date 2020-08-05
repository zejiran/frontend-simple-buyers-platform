# Frontend Simple Buyers Platform

> “From emotions to materials, it's all about buying and selling”
― Mehnaz Ansari

## Index

- [Overview](#overview)
- [Used Technologies](#used-technologies)
- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Overview

Vue.js app consuming services from 
[zejiran/backend-simple-buyers-platform](https://github.com/zejiran/backend-simple-buyers-platform)
that represents a simple buyer platform.

<img src="https://i.ibb.co/h2NLwTb/desktop.gif" width="65%" alt="Screenshot-md">

## Used Technologies

- Language: Go.
- Database: MySQL (It was Dgraph. After trying to use it for a while 
and can't get a good result, I have decided to use a different database.
I would try to use it on this project when more documentation about Dgraph release).
- API Router: ```chi```.
- Interface: Vue.js & Vuetify.

## Features

### Web interface:

- Allow to select a date to sincronize (see
 <a href='https://github.com/zejiran/backend-simple-buyers-platform#1-load-data-to-database'>data load to database</a>).
- Allow to see all buyers (see
 <a href='https://github.com/zejiran/backend-simple-buyers-platform#2-list-buyers'>list buyers</a>).
- Allow seeing buyer's page with its correspondant information (see 
 <a href='https://github.com/zejiran/backend-simple-buyers-platform#3-query-buyers'>query buyers</a>).
 
## Usage

1. Follow usage [instructions](https://github.com/zejiran/backend-simple-buyers-platform#usage) for setup backend.
2. Run 
[commands](https://github.com/zejiran/frontend-simple-buyers-platform/tree/master/buyer-platform#buyer-platform) 
for setup frontend or just do ```cd buyer-platform``` and ```npm run serve```.
3. Visit and explore app running at development or production server.

<img src="https://i.ibb.co/G3qnMCb/mobile.gif" width="30%" alt="Screenshot-sm">

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](LICENSE)**
- Copyright 2020 © Juan Alegría.

<img src="https://i.ibb.co/sWSrvyF/logo.png" width="40%" alt="Logo">
