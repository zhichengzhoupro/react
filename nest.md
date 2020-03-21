# NestJS
1. NestJs node 开源服务器端的矿机器
2. NestJS 得到Ts的支持
3. 面向对象 响应式编程 函数式编程
4. 是对Express的分装
5. 解决架构的问题
##NestJS CLI 
1.命令行工具帮你初始化和开发你的应用
2. 是一个脚手架工具
3. 生成文件结构

## 安装nest
sudo npm install -g @nestjs/cli

##nestJS 模块
1. 每个应用至少有一个模块 根模块
2. 根模块是整个应用的入口
3. 模块是一个有效的办法去组织组件
4. 最好是一个文件夹一个模块 去包括相关联的组件
5. 模块是`单例`的 所以一个模块可以被导入到多个模块
6. 模块定义 是一个类 并且由装饰器 @Module来装饰
7. provide 属性 用来注入依赖 供应者 服务
8. controller 用来注入控制器
9. exports 用来向外面暴露 供应者 服务
10 imports 用来注入 其他模块exports的模块

* 创建模块
nest g module tasks

##NestJS controller
1. 用来响应请求
2. 用路径进行绑定
3. 通过注入 可以调用服务
4. 用一个类 并且由@Controller装饰
5. handler 操作器 由 post get delete put 装饰方法
6. nestJS 将会自动路由到相对应的请求路径
7. 操作器将会 操作请求和回答对象
nest g controller tasks --no-spec

## NestJs Provider 供应者
1. 通过@Injectable 进行装饰
2. 通过构造器进行注入
3. 可以是一个值 一个类 sync/async 工厂等
4. 供应者必须在模块的供应者属性里声明
5. 是可以通过export 属性被模块暴露给其他模块

## NestJs service 服务
1. 是供应者 但是不是所有供应者都是服务
2. 它也是单例的 只有一个实例会被共享给所有拥有者
3. 是业务逻辑的根源

## NestJS 依赖注入
1. 在NestJS中的所有组件都可以注入 供应者（用@Injectable装饰的）
2. 注入是通过构造器进行注入的


## Nest 请求参数
1. @Body() body 通过body装饰器获取
2. @Body('title') title,
   @Body('description') description
   
## DTO
1. data transfer object 数据转移对象 
2. 是一种对象在进程之间 扛着数据
3. NestJS 定义DTO为 通过网络传输的数据形式
4. DTO 也是个通用的概念 在不同的应用和进程之间 扛着数据
5. DTO 不是数据模型 它定义了特定的情况定义的数据形态
6. DTO 可以用Class 或者接口来定义 推荐使用class来 因为interface是typescript的概念
   所以在编译之后是不会被保留原样的 但是class是ES6里面的 编译之后不会改变
7. 以上原因NestJS 是无法在编译之后映射接口 但是可以映射class
8. 对对象进行结构 const { name, age } = user 

## NestJS 通道
1. 通道 在操作器被呼叫之前 处理操作器参数
2. 通道被用来做数据变形以及数据验证
3. 通道可以返回原始或者被修改的数据 这些数据被交给操作者 
4. 通道可以抛出异常 异常会被nestJS转译成错误消息
5. 通道是可以异步的

## 重要的默认内置通道
* validationPipe 验证通道
- 验证传输对象和DTO 类是否匹配，如果不匹配 那么验证将失败
- 内置的验证通道是非常有用的
* ParseIntPipe 解析整数通道
- 默认所有参数都是字符串
- pipe 解析成功将可以把参数转化成数字

## 自定义通道
- 通道是供应者的一种 所以定义方法是一样的 一个由@Injectable装饰的类
- 通道必须实现PipeTransform 通道变形接口 所以必须实现里面的transform方法 用这个方法处理参数
- transform 方法接受两个参数
- value 要处理的值
- metadata 一些关于第一个参数的 信息数据
- return的数据会被发送给操作者，exception异常将会被返回给客户端

## 通道的使用方式
- 操作器级别的通道 handler level
  @UsePipes() 用该装饰器去调用
  特点: 作用域 在所有该操作器的参数上
- 参数级别的通道 parameter level
  只有特定的参数会被处理
  @Param('id'， pipe) id:string
- 全局通道
  定义在应用级别，将会处理所有请求
  app.userGlobalPipes(SomePipe)
  
 操作器级别的通道 虽然需要更多的代码 但是更加容易维护和扩展和DTO非常搭配
 
 ## class-validator class-transformer
 yarn add class-validator class-transformer
 typedi 是typestack团队提供的依赖注入解决方案，对于typescript 我们可以使用注解的开发方式
 在typescript当中 可以对一些常用的校验 用装饰器进行校验
 
 ```typescript
 import {IsNotEmpty} from 'class-validator'
 
 
 export class CreateTaskDto {
     @IsNotEmpty()
     title: string;
 
     @IsNotEmpty()
     description: string;
 }
 
 //在控制器中使用默认校验器
 @UsePipes(ValidationPipe)
     createTask(){}
 ```
 ValidationPipe 通道可以搭配class-validator一起使用 可以应付一些日常的情况
 
 ## nestJS 内置异常
 
 NotFoundException
 
 ## ORM object Relation mapping 对象关系映射
 1. 让你用对象编程的方式查询和操作数据库
 2 ORM的优势 
 - 写数据模型 非常容易维护和减少重复
 - 很多操作自动化了数据库的操作 数据类型 以及关系等等
 - 没有必要再写SQL了
 - 数据库抽象化 你可以轻松改变数据库类型
 - 面向对象的 所以继承很容易
 
 缺点 
 性能一般
 
## TypeORM
是一个nodejs的ORM库 可以基于Typescript或者javascript

### 安装
yarn add @nestjs/typeorm typeorm pg

### 配置TypeORM
```typescript
export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'taskmanagement',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize : true
}

// 然后在根模块导入TypeORM模块以及数据库配置

@Module({
  imports: [
      TypeOrmModule.forRoot(typeOrmConfig),
      TasksModule

  ]
})
export class AppModule {}
```

## 定义entity
1. 类必须继承BaseEntity类
2. 用@Entity装饰器进行装饰
3. @PrimaryGeneratedColumn() 这个用来定义自增主键
4. @Column() 表示普通的行

## 定义Repoitory
```typescript
import {EntityRepository, Repository} from "typeorm";
import {Task} from "./task.entity";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

}
// 在模块中 声明
@Module({
    imports: [
      TypeOrmModule.forFeature([TaskRepository])
    ],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}
```

## 注入Repoitory
```typescript
// 用构造器进行注入
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository : TaskRepository

    ) 
// 与普通 供应者不一样的是 需要@InjectRepository 进行装饰
```

## 代码例子
```typescript
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const {title, description} = createTaskDto;

        const task: Task =  new Task();
        task.title = title;
        task.description = description;
        task.status = TaskStatus.OPEN;

        return await this.save(task);
    }
```
* 删除建议使用delete 按条件删除 remove是整个对象进行删除 数据库成本高



## 给表加上unique constraint
```typescript
@Entity()
@Unique(['username'])
export class User extends BaseEntity {
    
}
```
## 给password 加密
1. 使用bycrypt
```typescript
yarn add bcrypt

```

```typescript
const salt = await bycrypt.genSalt(); //来点盐
const password  = await bycrypt.hash(password, salt); // 得到最后的哈希密码
```

## JWT  
1. JWT 是一个开源工业协议
2. JWT 指令环 由一个头 包括环的其他信息 包括种类 哈希算法
3. 第二部分 payload 负载 包括 claim 声明 内容是关于用户的
3. 第三部分是签名 这段是用一段密码来的加密的头

### 安装需要的包
yarn add @nestjs/jwt @nestjs/passport passport passport-jwt



