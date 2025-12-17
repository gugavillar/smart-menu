FROM node:20-slim AS base

RUN apt-get update -y && apt-get install -y python3 make g++ && rm -rf /var/lib/apt/lists/*
WORKDIR /app
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM deps AS build

COPY . .

FROM gcr.io/distroless/nodejs20 AS production
WORKDIR /app

ENV NODE_ENV=production

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
# COPY --from=build /app/.next/static ./.next/static

# SHARP (binário + dependências)
COPY --from=build /app/node_modules/sharp ./node_modules/sharp
COPY --from=build /app/node_modules/.pnpm ./node_modules/.pnpm
# Necessário para o Next encontrar o sharp
ENV NEXT_SHARP_PATH=/app/node_modules/sharp

EXPOSE 3000

CMD ["server.js"]
