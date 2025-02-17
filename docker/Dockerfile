FROM node:22-alpine AS build

WORKDIR /app

COPY . ./

RUN rm -rf /app/node_modules

RUN rm -rf /app/dist

RUN npm i

RUN npm run build

FROM nginx:1.23.1-alpine

RUN rm -rf /usr/share/nginx/html/*

ADD docker/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/es-2-lpcinema-angular/browser /usr/share/nginx/html/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
