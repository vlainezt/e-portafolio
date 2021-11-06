FROM httpd:2.4

LABEL maintainer="Víctor Laínez <vlainezt07@gmail.com>"

ENV CREATED_AT 2021/11/06

COPY ./*.* /usr/local/apache2/htdocs/

EXPOSE 80
