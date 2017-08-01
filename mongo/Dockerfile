FROM mongo:3.4.1

RUN mongod --auth

RUN mongo

RUN use admin

RUN db.createUser({user:'admin',pwd:"123456",roles:[{role:'root',db:'admin'}]})
# RUN mkdir -p /myproject
# WORKDIR /myproject
# # ENV MYSQL_PORT 8088

# COPY ./project /myproject

# # COPY package.json /myproject
# RUN npm install
# COPY . /myproject
# COPY ./docker-entrypoint.sh /

# ENTRYPOINT ["/docker-entrypoint.sh"]

# EXPOSE 8088

# CMD ["node","test.js"]