FROM node:22.13.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview"]