FROM node:current-alpine3.16 as builder
COPY . /app
WORKDIR /app
RUN npm ci
RUN npm run build

FROM gcr.io/distroless/nodejs:18
COPY --from=builder /app /app
WORKDIR /app
ENTRYPOINT ["build/index.js"]