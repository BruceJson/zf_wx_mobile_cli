FROM nginx:1.13.3-alpine

MAINTAINER qijun@routercn.cn

#拷贝文件到服务器
ADD ./dist/ /usr/share/nginx/html
#luteshe
COPY MP_verify_8abr1TdiKvZgtfgL.txt /usr/share/nginx/html/MP_verify_8abr1TdiKvZgtfgL.txt
#zyjs
COPY MP_verify_aTvl3k3eUCzSaOdW.txt /usr/share/nginx/html/MP_verify_aTvl3k3eUCzSaOdW.txt
COPY ./ci-build/nginx.conf /etc/nginx/nginx.conf
COPY ./ci-build/nginx.vh.default.conf /etc/nginx/conf.d/default.conf

#启动
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]