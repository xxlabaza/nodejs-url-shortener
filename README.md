
# Overview

This is a yet another implementation of an URL shortener service based on **Web Dev Simplified** [tutorial](https://www.youtube.com/watch?v=SLpUKAGnm-g&t=25s) and customised (try to find my own NodeJS style...) by me.

The project's features:

* its frontend made with `Bootstrap` and `EJS` templates;
* stores data in `MongoDB` via `mongoose` library;
* runs `ESLint` before the tests;
* it has the tests with power of `Jest` and `supertest` (for API checks);
* uses `nodemon` for automaticaly restarting app during the development;
* it uses `Docker` and `docker-compose` tools for distribution, local launch and testing.

## Launch

### Docker compose

To run the project with a `docker-compose` tool, just type the following in a terminal:

```bash
$> docker-compose up --detach
Creating mongodb ... done
Creating url-shortener ... done
```

To stop the project:

```bash
$> docker-compose stop
Stopping url-shortener ... done
Stopping mongodb       ... done
```

### Developer mode

To run the project in develop mode, start a **MongoDB** database, for example via a **Docker**:

```bash
$> docker run -p 27017:27017 mongo:4.2.3
...
```

Then, start the project itself:

```bash
$> npm run start:dev

> url-shortener@1.0.1 start-dev /url-shortener
> nodemon main.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node main.js`
...
```

## Open the project

Open [localhost:5000](http://localhost:5000) (port **5000** - is default) in your web browser and see something like this:

![filled table](https://github.com/xxlabaza/nodejs-url-shortener/blob/master/.screenshots/screenshot-1.png?raw=true)
