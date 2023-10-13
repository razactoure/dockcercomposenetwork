FROM ubuntu
RUN apt-get update && apt-get upgrade -y
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN mkdir /backend
WORKDIR /backend
COPY index.js .
COPY package.json .
RUN npm install express nodemon 
EXPOSE 3000
CMD ["npm", "run" , "start"]
