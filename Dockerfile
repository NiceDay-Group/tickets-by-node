FROM node

RUN npm install nodemon -g

WORKDIR /src

ADD . /src

RUN npm install

EXPOSE 80

CMD nodemon -L index.js