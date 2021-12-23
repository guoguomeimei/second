# 开源软件第八周-express

## 1.安装









## 路由的写法

where

### app is an instance of express.

### METHOD is an HTTP request method, in lowercase.

### PATH is a path on the server.

### HANDLER is the function executed when the route is matched.

用use的写法:

app.use(PATH,HANDLER)

不区分使用什么方法访问，只要路径相同，都经过次路由。





##### 3.相同路由的情况

##### 对于相同的路由，如果没有使用next(),则只进入第一个路由

![image-20211027180834316](/home/user1/doc/testExpress/image-20211027180834316.png)

const **express**=**require**('express')

const app=**express**()

const port =3000



app.**use**('/',(req,res)=>{

​    res.**send**('This is use method.')

​    console.**log**('use')

})

app.**get**('/',(req,res)=>{

​    res.**send**('Hello world!Guogkk')

​    console.**log**('get')

})

*// app.post('/',(req,res)=>{*

*//     res.send('This is post method.')*

*// })*

app.**listen**(3000)

![image-20211027180924672](/home/user1/.config/Typora/typora-user-images/image-20211027180924672.png)

##### 4静态文件

##### 基本写法：app.user(express.static('文件目录'))

例如：app.use(express.static('publlic')),其中Public目录是相对路径写法，其中public 目录是相对路径写法，将整个project拷贝到其他路径



(2)物理路径合并

（3）虚拟路径   app.use(寻你路径，express.static('文件目录名'))

例如：

![image-20211031171855974](/home/user1/.config/Typora/typora-user-images/image-20211031171855974.png)



表示将public.private都映射到前端的根路径下。

![image-20211031174450634](/home/user1/.config/Typora/typora-user-images/image-20211031174450634.png)

表示将物理路径html2都映射到前端的路径‘/href2’

4.物理路径的绝对写法：

app.use(前段路经，express.static(path.join(__dirname,物理路径)))



### 5.文件发送：sendFile

![image-20211103173518501](/home/user1/.config/Typora/typora-user-images/image-20211103173518501.png)

要求文件绝对路径写法，回调参数是err。

## 6中间键

路由中调用next()，允许再次进入其他路由。

