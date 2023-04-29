FROM node:alpine

WORKDIR /home/node

COPY src/package.json /home/node/package.json

RUN npm cache clean --force && \
    npm install
