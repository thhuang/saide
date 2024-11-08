FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

ENV HOST=0.0.0.0
ENV PORT=13701

EXPOSE 13701

CMD ["npx", "y-websocket"]
