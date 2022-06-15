FROM node:16.14-alpine As development

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm i @angular/cli -g
COPY decorate-angular-cli.js ./
RUN npm config set unsafe-perm true
RUN  npm install minimist && \
    npm install --only=development
RUN mkdir -p /usr/src/app/node_modules/.cache && chmod -R 777 /usr/src/app/node_modules/.cache


COPY . .
RUN echo '{"/api": {  "target": "http://api:3333", "secure": false}}' > "/usr/src/app/apps/kampakam/proxy.conf.json"
EXPOSE 4200
RUN npm run build:kampakam

#TODO make it production ready, configure nginx
FROM nginx:latest as production
COPY ./docker/angular.conf /etc/nginx/nginx.conf
COPY --from=development /usr/src/dist/apps/kampakam /usr/share/nginx/html
