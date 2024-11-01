FROM node:20-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

ENV HOST=0.0.0.0
ENV PORT=80

EXPOSE 80

CMD ["npx", "y-websocket"]
