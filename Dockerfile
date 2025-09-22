# Base Image 
FROM node:22  

WORKDIR /app

COPY package*.json ./ 
COPY client/package*.json ./client/
COPY server/package*.json ./server/

COPY . .

RUN npm i 
RUN cd client && npm i
RUN cd server && npm i



EXPOSE 5000 5173

CMD ["npm","start"]