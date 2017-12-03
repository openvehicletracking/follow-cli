FROM ubuntu:16.04

MAINTAINER Yunus Oksuz <yunusoksuz@gmail.com>

# install required packages
RUN apt-get update -y
RUN apt-get install -y nginx tzdata locales

# configure timezone
RUN echo "Europe/Istanbul" > /etc/timezone
RUN rm -f /etc/localtime
RUN dpkg-reconfigure -f noninteractive tzdata

RUN mkdir -p /opt/app/html
COPY public /opt/app/html/
COPY nginx-follow-cli.conf /etc/nginx/sites-enabled/follow-cli.conf


CMD ["nginx", "-g", "daemon off;"]