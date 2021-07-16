FROM node:16.1.0 as builder

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app/

RUN npm install -g npm@7.18.1
RUN npm i 

COPY . /app/

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]




