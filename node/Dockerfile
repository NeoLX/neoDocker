FROM node:7.2.1

RUN mkdir -p /myproject
WORKDIR /myproject
#ENV MYSQL_PORT 8088

COPY ./project /myproject
COPY ./env_init.sh /

ENTRYPOINT ["/env_init.sh"]

EXPOSE $MYSQL_PORT

CMD ["node","test.js"]
