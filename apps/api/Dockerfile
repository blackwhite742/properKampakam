FROM node:16.14-alpine As development

ENV DB_TYPE=mysql
ENV DB_HOST=64.227.122.109
ENV DB_PORT=3306
ENV DB_USERNAME=miha
ENV DB_PASSWORD=primeng
ENV DB_NAME=mydb

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i @angular/cli -g
COPY decorate-angular-cli.js ./
RUN npm config set unsafe-perm true
RUN  npm install minimist &&\
  npm install --only=development
RUN mkdir -p /usr/src/app/node_modules/.cache && chmod -R 777 /usr/src/app/node_modules/.cache
RUN npm config set unsafe-perm true
COPY . .

RUN npm run build:api

#! production

FROM node:16.14-alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src

COPY package*.json ./

RUN  npm install minimist typescript ts-node lodash reflect-metadata tslib rxjs @nestjs/platform-express @types/bcrypt && \
  npm install --only=production

COPY . .
COPY --from=development /usr/src/app/dist/apps/fwa-api ./dist
EXPOSE 3333
CMD ["node", "dist/main"]
