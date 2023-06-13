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
FROM devforth/spa-to-http:latest

ARG TARGET

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/packages/${TARGET}/out .

USER nextjs

EXPOSE 3000

ENV PORT 3000