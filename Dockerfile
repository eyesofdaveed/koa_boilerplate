FROM node:14.18-buster-slim

ARG NPM_TOKEN
ENV NPM_TOKEN $NPM_TOKEN

# Install LibreOffice
RUN apt-get update && apt-get -y install libreoffice

# install nodemon
RUN npm install -g nodemon

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./.npmrc .
COPY ["package.json", "package-lock.json", "./"]

RUN npm install --silent

# Bundle app source
COPY . .

# Cleanup
RUN rm -f ./.npmrc

EXPOSE 8080
CMD [ "nodemon", "-r", "dotenv/config", "src/index.js" ]