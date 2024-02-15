# 要去哪里找Java安装包

> Java是一门面向对象的编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程
> <p style="text-align: right;">————<a href = "https://baike.baidu.com/item/JaVa/85979">百度百科</a></p>

众所周知，Minecraft这款游戏，无论是客户端，还是服务端，都采用了Java语言进行编写。这也导致了Java运行时(Java Runtime Environment, JRE)成了游玩Minecraft的刚需

::: tip 小提示

如果你采用的是Linux系统,你也许可以不用下载安装包,直接使用包管理器即可,参阅[安装Java](./install-java.md)

:::

较为标准的Java的安装包你可以通过以下途径找到，你可以自行取舍：

但请注意，根据你网络环境的不同，表格内排名最先的**不一定**为最优选择

|名称|链接|下载速度|需要登录/注册|
|---|---|---|---|
|清华大学Adoptium OpenJDK镜像站|<https://mirrors.tuna.tsinghua.edu.cn/Adoptium/>|快|不需要|
|Microsoft OpenJDK|<https://learn.microsoft.com/zh-cn/java/openjdk/download>|较快|不需要|
|Oracle JDK|<https://www.oracle.com/cn/java/technologies/downloads/>|适中|需要|
|Adoptium OpenJDK|<https://adoptium.net/zh-CN/>|慢|不需要|

*如果你是追求极致性能的用户,你可能需要寻找第三方的JRE(如[Zulu](https://www.azul.com/downloads/?package=jdk#zulu))来更好地利用你设备的资源,在此不作赘述*

*本表给出的是**JDK** (Java Development Kit, Java开发套件) 的下载地址, 其**包括JRE**和一系列实用工具*
