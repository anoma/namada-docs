ARG TARGET

FROM node:18-alpine AS base

ARG TARGET

FROM base AS builder
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY apps/docs/package.json apps/${TARGET}/

# Install dependencies
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
RUN npm install -g npm@^9.7.1 && npm install -g pnpm@^8.6.2 && pnpm install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm build:${TARGET}

# Production image, copy all the files and run next
FROM devforth/spa-to-http:latest

ARG TARGET

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/${TARGET}/out .

USER nextjs

EXPOSE 3000

ENV PORT 3000