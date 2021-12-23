# mongodb配置与使用

## 1.mongodb配置

（1）下载解压缩

我们使用4.2版本。

tar -zxvf +文件名

（2）测试

建立数据存储目录，注意权限，建议建在家目录下。

mongodb软件目录结构：

![image-20211107163833903](/home/user1/.config/Typora/typora-user-images/image-20211107163833903.png)

打开服务器端应用:mingod --dpath 数据目录结构



![image-20211107164437785](/home/user1/.config/Typora/typora-user-images/image-20211107164437785.png)

然后打开客户端程序：

./mongodb

![image-20211107171156875](/home/user1/.config/Typora/typora-user-images/image-20211107171156875.png)



![image-20211107171246705](/home/user1/.config/Typora/typora-user-images/image-20211107171246705.png)

(3)配置路径

![image-20211107172256904](/home/user1/.config/Typora/typora-user-images/image-20211107172256904.png)

编辑家下的bashrc文件，把mongodb应用的路径写入。

export PATH=/home/user1/software/mongodb-4.2.17/bin:$PATH

wq

然后vim .bashrc

保存退出后执行：..bashrc

![image-20211107172715150](/home/user1/.config/Typora/typora-user-images/image-20211107172715150.png)

测试：在任意路径下执行：mongod --dbpath /home/user1/mongodbData

![image-20211107173149289](/home/user1/.config/Typora/typora-user-images/image-20211107173149289.png)

(2)然后任意路径   mongo

![image-20211107174051069](/home/user1/.config/Typora/typora-user-images/image-20211107174051069.png)

## 2.mongodb的基本概念

（1）与关系数据库的对比

![image-20211107175924356](/home/user1/.config/Typora/typora-user-images/image-20211107175924356.png)

一个表中没有严格的统一字段概念

## 3.mongodb shell的使用，客户端的使用

(1)显示数据库：show dbs

(2)切换数据库:use +数据库名

没有专门的新建数据库命令，如果数据库名不存在，就新建数据库，前提是向此数据库中

写入了内容

![image-20211107181804917](/home/user1/.config/Typora/typora-user-images/image-20211107181804917.png)

（3）显示数据集

show collections

show tables

(4)创建数据集

直接向数据集中写入文档，就创建了数据集。

i    删除数据库 

db.dropDatabase()

![image-20211114172315438](/home/user1/.config/Typora/typora-user-images/image-20211114172315438.png)

ii 删除数据集



（5）向数据集中写入文档

写入方式：db.数据集。写入方法（insert,或insertmany）({文档（serial: ,name:）})

（6）查找文档

基本格式：db.数据集.find（查找字串）



(4) 创建数据库

![image-20211117163338839](/home/user1/.config/Typora/typora-user-images/image-20211117163338839.png)

创建定常集合：options={capped:true,size:2000,max:5}





大多数以文档数为限



（5）向数据集中写入文档

写入方式：db.数据集.写入方法.



insertOne :插入一个文档

insertMany：插入很多文档。

（6）查找文档

```
>db.数据集.find（查找条件)
mongoDB的条件操作符：
```

![image-20211117171703637](/home/user1/.config/Typora/typora-user-images/image-20211117171703637.png)

（7）更新文档

```
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```

（8）删除文档

```
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
```

- **query** :（可选）删除的文档的条件。

- **justOne** : （可选）如果设为 true 或 1，则只删除一个文档，如果不设置该参数，或使用默认值 false，则删除所有匹配条件的文档。

- **writeConcern** :（可选）抛出异常的级别。

- 删除是如果条件为空，将删除所有文档：

  ![image-20211117165856014](/home/user1/.config/Typora/typora-user-images/image-20211117165856014.png)

  不写justOne

写juestOne





## 4.vscode mongodb插件

打开scode，

![image-20211114163220222](/home/user1/.config/Typora/typora-user-images/image-20211114163220222.png)

安装完成后，在左侧工具栏中有一个叶子图表是mongoDB

![image-20211114163345886](/home/user1/.config/Typora/typora-user-images/image-20211114163345886.png)

点击中间的connect

![image-20211114163450746](/home/user1/.config/Typora/typora-user-images/image-20211114163450746.png)

在最上端的编辑矿中输入连接字符串，例如：mongodb://localhost:27017

在界面左侧显示以树性结构显示mongodb内容。



![](/home/user1/.config/Typora/typora-user-images/image-20211114165049719.png)

playground：图形界面

![image-20211114165743397](/home/user1/.config/Typora/typora-user-images/image-20211114165743397.png)

当前没有运行图标，需要该文件扩展名：

![image-20211114170019091](/home/user1/.config/Typora/typora-user-images/image-20211114170019091.png)

点击运行图表，会对数据库进行相应操作，结果显示在右侧窗口![image-20211114170526290](/home/user1/.config/Typora/typora-user-images/image-20211114170526290.png)

mongodb的id字段一般不能重复，即使重复也不会报错，因此一般我们不写🆔id字段，这样可以自动生成🆔id字段不会重复。

## 5.node.js操作mongodb创建

![image-20211117172436138](/home/user1/.config/Typora/typora-user-images/image-20211117172436138.png)



