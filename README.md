## Quick Start

### Start up the app

Please install docker first if it's not installed.  
https://docs.docker.com/install/


```shell
docker-compose up --build
```

Open https://localhost:3000   
That's it!

## Applications

* react
 * frontend 
* node
 * api server
 * websocket(socket.io)
* redis
 * caching
 * Pub/Sub
* nginx
 * SSL reverse proxy
 * serving static files
 * content caching

### Diagram

react(https://localhost:3000) --> nginx_proxy(https://localhost) --> node(http://localhost:8080)

## Editor setup

### Atom

install `linter`, `linter-eslint`, `prettier-atom`
