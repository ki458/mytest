FROM keymetrics/pm2 

# 暴露端口
EXPOSE 8777

WORKDIR /data/release/mytest

# 创建目录
RUN mkdir -p /data/release/mytest

# 复制源码
COPY . /data/release/mytest

# 容器启动时，启动应用服务
CMD ["pm2-runtime", "ecosystem.config.js", "--only", "mytest"]