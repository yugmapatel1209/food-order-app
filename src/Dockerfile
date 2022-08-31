# syntax=docker/dockerfile:1

FROM node:10.24.1
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]