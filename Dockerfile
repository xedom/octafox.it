
FROM node:14 as siteBuild

LABEL maintainer Kaj Oskar Rusilowski

WORKDIR /web

COPY package*.json ./
RUN npm install

COPY . /web
RUN npm run build


FROM nginx:alpine

COPY ./nginx/octafox.it.conf /etc/nginx/conf.d/default.conf
COPY --from=siteBuild /web/dist /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
