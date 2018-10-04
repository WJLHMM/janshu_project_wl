运行步骤：
1. npm install
2. npm start 或者 yarn start
3. 所有mock-data 在 public/api 下面 可以使用Charles等读取。

服务器上部署代码，
1.先将public/api中mock-data移除，
2.npm run build
3.将public/api中数据转移到build/api
4.将build中的文件copy到服务器根目录下，打开服务器软件即可。也可依照bulid后的提示全局安装 serve，运行 serve -s build 
在localhost 5000中直接打开即可

