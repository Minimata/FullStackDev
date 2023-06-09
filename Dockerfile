FROM node:19

EXPOSE 3000

WORKDIR /usr/src/app

COPY ./ ./
RUN npm install
RUN npm run build
CMD [ "node" , "./.output/server/index.mjs" ]
