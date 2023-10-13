FROM ubuntu
RUN apt-get update && apt-get upgrade -y
RUN apt-get install systemctl ufw  nginx -y
RUN ufw allow "Nginx Full"
WORKDIR /etc/nginx/sites-available/
COPY odoo.conf .
run  ln -s /etc/nginx/sites-available/odoo.conf /etc/nginx/sites-enabled/
RUN systemctl reload nginx.service
EXPOSE 80
CMD [ "nginx","-g","daemon off ;" ]