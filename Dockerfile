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
EXPOSE 80
