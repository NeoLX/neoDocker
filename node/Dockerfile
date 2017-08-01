FROM node:latest

RUN mkdir -p /myproject
WORKDIR /myproject
# ENV MYSQL_PORT 8088

COPY ./project /myproject

# COPY package.json /myproject
RUN npm install
COPY . /myproject
# COPY ./env_init.sh /

# ENTRYPOINT ["/env_init.sh"]

EXPOSE 8088

CMD ["node","test.js"]
