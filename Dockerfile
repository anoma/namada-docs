ARG TARGET

FROM node:18-alpine AS base

ARG TARGET

FROM base AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY packages/${TARGET}/package.json packages/${TARGET}/

# Install dependencies
COPY package-lock.json package.json ./
RUN npm install ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build:${TARGET}

# Production image, copy all the files and run next
FROM nginx:alpine

ARG TARGET
COPY nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/packages/${TARGET}/out .

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]