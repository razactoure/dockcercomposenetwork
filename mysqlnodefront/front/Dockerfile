FROM nginx
RUN apt-get update && apt-get upgrade -y
WORKDIR /var/www/html/
RUN rm -rf *
COPY index.html .
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
