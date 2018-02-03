FROM node:9.5-alpine

WORKDIR /data/app
COPY package*.json yarn.lock ./
RUN yarn
COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev"]
