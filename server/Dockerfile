FROM node:14

WORKDIR /usr/build/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["node", ./build/"app.js"]
