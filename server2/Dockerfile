FROM node:18

COPY package.json package.json
RUN npm install

COPY . .

EXPOSE 5001

CMD ["node", "server2.js"]