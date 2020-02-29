
FROM node:12 as node-build

LABEL maintainer Kaj Oskar Rusilowski

WORKDIR /app
COPY . ./

RUN npm install
RUN npm run build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node-build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]