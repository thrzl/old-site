FROM node:18-alpine as install-deps

WORKDIR /app

COPY . .
RUN npm install

FROM install-deps as builder
RUN npm run build
RUN npm prune --production # Remove dev dependencies
EXPOSE 3000

CMD [ "npm", "run", "preview", "--host" ]