FROM node:18

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "server1.js"]