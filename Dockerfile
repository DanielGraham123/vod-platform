FROM node:12.19 AS build

# destination directory
RUN mkdir -p /usr/src/bbtv-web
WORKDIR /usr/src/bbtv-web

# update and install depedency
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# copy this project into our destination directory
COPY . /usr/src/bbtv-web/
RUN npm install

# run the build
RUN npm run build

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# start the app
CMD [ "npm", "start" ]