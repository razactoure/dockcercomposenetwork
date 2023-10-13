FROM node
RUN apt-get update && apt-get upgrade -y
RUN mkdir /app
WORKDIR /app
COPY index.js .
COPY package.json .
RUN npm install express mysql2 sequelize
EXPOSE 8080
CMD ["node","index.js"]