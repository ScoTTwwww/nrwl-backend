FROM node:12.13-alpine

RUN npm install -g @nestjs/cli

ENV APP_DIR /opt/app

WORKDIR ${APP_DIR}

COPY package.json package-lock.json ${APP_DIR}/

RUN git init && npm install 
