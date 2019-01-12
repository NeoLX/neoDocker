FROM node:lts-jessie

RUN apt-get update \
    && apt-get install -y apt-utils \
    && apt-get install -y cmake 

RUN mkdir -p /usr/local/lib/node_modules/opencv4nodejs \
    && mkdir -p node_modules/opencv-build/opencv/build/lib \
    && npm install -g opencv4nodejs