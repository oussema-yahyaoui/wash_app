FROM node:12

WORKDIR /ahmed/src/app

COPY package*.json ./

RUN npm install

# RUN npm ci --only=production

COPY . .


RUN npm run build 

EXPOSE 80
CMD [ "node", "dist/main" ]
