FROM node:13.14.0-slim
# FROM node:12.19.0

RUN curl --compressed -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080
CMD ["node", "./index.js"]
