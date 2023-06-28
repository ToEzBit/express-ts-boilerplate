# Build stage
FROM node:18-alpine as build-stage

RUN npm install pnpm@latest -g

WORKDIR /build

COPY . .

RUN pnpm install --frozen-lockfile && pnpm store prune && pnpm run build

# Runtime stage
FROM node:18-alpine 

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

RUN npm install pnpm@latest -g

WORKDIR  /opt/node_app

COPY --from=build-stage /build/dist  ./dist
COPY package.json  pnpm-lock.yaml ./ 

RUN pnpm install --frozen-lockfile && pnpm store prune

EXPOSE 8888
CMD [ "npm", "start"  ]

