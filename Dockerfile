FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY apps/docs/package.json apps/docs/

# Install dependencies
COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
RUN npm install -g pnpm && pnpm install

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm build:docs

# Production image, copy all the files and run next
FROM devforth/spa-to-http:latest
WORKDIR /app

ENV NODE_ENV production
# # Uncomment the following line in case you want to disable telemetry during runtime.
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/apps/docs/out .

USER nextjs

EXPOSE 3000

ENV PORT 3000