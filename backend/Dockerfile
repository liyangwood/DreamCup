FROM mhart/alpine-node:8.0.0

WORKDIR /dreamcup
RUN npm install -g concurrently nodemon typescript tslint
COPY package.json /dreamcup/package.json
RUN npm install
RUN mv /dreamcup/node_modules /node_modules
