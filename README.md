## Quick Start

## 1. With Docker

Please install docker for mac first if it's not installed.  
https://docs.docker.com/docker-for-mac/install/

```shell
docker-compose up --build
```

Open https://localhost:3000

### 1.2 Diagram

react(https://localhost:3000) --> nginx_proxy(https://localhost) --> node(http://localhost:8080)

## 2. Without Docker

Please install yarn if it's not installed.  
https://yarnpkg.com

### Start up the server app

```shell
cd servers
yarn
npm run dev
```

If nginx is not running to proxy SSL, make sure that your server is running at port 443. The default port is set to 8080.

### Start up the client app

```shell
cd frontend
yarn
npm start
```

## Editor setup

### Atom

install `linter`, `linter-eslint`, `prettier-atom`
