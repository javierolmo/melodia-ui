# Build pfg-frontend
FROM node:15.11.0 AS node
WORKDIR /app/melodia
COPY . .
RUN npm install
RUN npm run build:prod

# Run
FROM nginx:latest
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=node /app/melodia/dist /usr/share/nginx/html
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env/env.template.js > /usr/share/nginx/html/assets/env/env.js && exec nginx -g 'daemon off;'"]
EXPOSE 80
