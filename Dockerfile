FROM node:18-alpine

RUN mkdir /plennia

WORKDIR /plennia

COPY . ./

RUN npm install

RUN npm run build

COPY . /plennia

RUN ls -a