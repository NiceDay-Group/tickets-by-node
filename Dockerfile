FROM node

RUN npm install nodemon -g

WORKDIR /src

ADD . /src

RUN npm install

EXPOSE 3000

CMD nodemon -L index.js