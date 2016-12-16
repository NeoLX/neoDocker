FROM node:7.2.1

RUN mkdir -p /myproject
WORKDIR /myproject

COPY ./project /myproject

EXPOSE 8088

CMD ["node","test.js"]
