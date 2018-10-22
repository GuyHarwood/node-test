FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn install --ignore-engines

COPY . .

EXPOSE 3000
CMD node index.js
