FROM node:12.19 AS build

# destination directory
RUN mkdir -p /usr/src/bbtv-web
WORKDIR /usr/src/bbtv-web

# update and install depedency
RUN apk update & apk upgrade
RUN apk add git

# copy this project into our destination directory
COPY . /usr/src/bbtv-web/
RUN npm install

# run the build
RUN npm run build

# expose port 5000 on the container
EXPOSE 5000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

# start the app
CMD [ "npm", "start" ]