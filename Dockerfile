FROM node:lts-alpine3.12

COPY . .

RUN npm i

CMD [ "npm", "run", "serve" ]