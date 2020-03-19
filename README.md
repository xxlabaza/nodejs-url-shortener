
# Overview

This is a yet another implementation of an URL shortener service based on **Web Dev Simplified** (tutorial)[https://www.youtube.com/watch?v=SLpUKAGnm-g&t=25s] and customised (try to find my own NodeJS style...) by me.

To run the project, start a **MongoDB** database, for example via a **Docker**:

```bash
$> docker run -p 27017:27017 mongo:4.2.3
...
```

Then, start the project itself:

```bash
$> npm run start-dev

> url-shortener@1.0.0 start-dev /url-shortener
> nodemon main.js

[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node main.js`

```

Open (localhost:5000)[http://localhost:5000] in your web browser and see something like this:

![filled table](https://github.com/xxlabaza/nodejs-url-shortener/blob/master/.screenshots/screenshot-1.png?raw=true)
