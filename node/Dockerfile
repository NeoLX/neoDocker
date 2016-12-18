FROM node:7.2.1

RUN mkdir -p /myproject
WORKDIR /myproject
ENV MYSQL_PATH HELLO

COPY ./project /myproject
COPY ./env_init.sh /

ENTRYPOINT ["/env_init.sh"]

EXPOSE 8088

CMD ["node","test.js"]
