FROM node:latest

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
