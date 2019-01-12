FROM node:lts-jessie

RUN apt-get update 
RUN apt-get install -y apt-utils 
RUN apt-get install -y cmake 

RUN mkdir -p /app/lib \
    && cd /app/lib \
    && npm install -s opencv4nodejs
