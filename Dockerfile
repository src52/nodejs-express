FROM node:14-alpine3.10 as compile
WORKDIR /usr/app
COPY package*.json ./
COPY tsconfig*.json ./
RUN npm install
COPY . ./
RUN npm run build

FROM node:14-alpine3.10 as minimize
WORKDIR /usr/app
COPY --from=compile /usr/app/package*.json ./
COPY --from=compile /usr/app/build ./
RUN npm install --only=production

FROM gcr.io/distroless/nodejs:14 as deploy
WORKDIR /usr/app
WORKDIR /usr/app
COPY --from=minimize /usr/app ./
USER 1000
CMD ["app.js"]