FROM node:7.7.2-alpine

WORKDIR /project2

COPY package*.json /project2/

RUN npm install

COPY ./ /project2/

CMD ["npm", "start"]
