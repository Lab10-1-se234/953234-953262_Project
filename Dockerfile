FROM node:7.7.2-alpine

WORKDIR /project2

COPY package*.json /project2/

RUN npm install

COPY ./ /project2/

ARG TARGET=ng-deploy

RUN npm run ${TARGET}


FROM nginx:1.13

COPY --from=node /app/dist/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
