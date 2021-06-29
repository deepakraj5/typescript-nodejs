FROM node:10-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build
RUN rm -rf /app/src
EXPOSE 3000
CMD node dist/app.js