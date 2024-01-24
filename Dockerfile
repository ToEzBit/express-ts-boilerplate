# Build stage
FROM node:20-alpine as build-stage

RUN npm install pnpm@8.7 -g

WORKDIR /build-file

COPY package.json  pnpm-lock.yaml ./
COPY  ./scripts ./scripts/

RUN pnpm install --frozen-lockfile 

COPY . .

RUN pnpm run build

RUN pnpm store prune


# Runtime stage
FROM node:20-alpine 

ENV NODE_ENV=production \
    PORT=8888 \
    CORS="*" 

RUN npm install pnpm@8.7 -g

WORKDIR  /opt/node_app

COPY --from=build-stage ./build-file/build   ./build/
COPY  ./scripts ./scripts/

COPY package.json  pnpm-lock.yaml ./
COPY --from=build-stage ./build-file/package.json ./build-file/pnpm-lock.yaml ./

RUN pnpm install --prod --frozen-lockfile 
RUN  pnpm store prune

EXPOSE 8888
CMD [ "pnpm", "start"  ]

