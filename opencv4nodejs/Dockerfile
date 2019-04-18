FROM node:lts

RUN apt-get update 
RUN apt-get install -y apt-utils 
RUN apt-get install -y cmake 
RUN apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

RUN mkdir -p /app/lib \
    && cd /app/lib \
    && npm install -s opencv4nodejs 
RUN npm install -s --build-from-source canvas 
