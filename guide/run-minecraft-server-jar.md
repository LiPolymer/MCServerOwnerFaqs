# 怎么运行服务端

为了启动一个服务端，我们假设您已经拥有了一个服务端核心储存在了一个特定路径，并将核心命名为`server.jar`

## 创建启动脚本

一般来说，我们并不推荐您直接双击打开服务端的jar文件，因为这往往会引起很多问题

作为替代方案，您应该在该文件夹内创建一个启动脚本，通过它来自动完成启动前的参数配置

我们假设您服务端所在的文件夹结构如下：

```txt
.
└── server.jar

0 directories, 1 file
```

那么，你应该创建一个名为`start.bat`的文件，并在其中输入如下内容：

```bat
@echo off
java -jar server.jar
```

当然，如果你想让服务器能在崩溃的时候自动重启，可以这样写：

```bat
@echo off

:restart
java -jar server.jar
goto restart
```

甚至是控制内存和添加一些奇奇怪怪的参数也没问题（这里不再额外赘述）

```bat
@echo off

:restart
java -Xmx4G -Xms2G -jar server.jar nogui
goto restart
```

创建完毕并保存后，双击打开`start.bat`，你会先看到一个黑色的框框，我们一般称呼它为终端

此时你的文件结构应该是这样的：

```txt
.
├── server.jar
└── start.bat

0 directories, 2 files
```

## 同意用户协议

往往在第一次启动时，你会收到如下信息（或者相似的内容）：

```log
...
Starting net.minecraft.server.Main
[11:43:49] [ServerMain/ERROR]: Failed to load properties from file: server.properties
java.nio.file.NoSuchFileException: server.properties
        at sun.nio.fs.WindowsException.translateToIOException(WindowsException.java:85) ~[?:?]
        at sun.nio.fs.WindowsException.rethrowAsIOException(WindowsException.java:103) ~[?:?]
        at sun.nio.fs.WindowsException.rethrowAsIOException(WindowsException.java:108) ~[?:?]
        at sun.nio.fs.WindowsFileSystemProvider.newByteChannel(WindowsFileSystemProvider.java:236) ~[?:?]
        at java.nio.file.Files.newByteChannel(Files.java:380) ~[?:?]
        at java.nio.file.Files.newByteChannel(Files.java:432) ~[?:?]
        at java.nio.file.spi.FileSystemProvider.newInputStream(FileSystemProvider.java:422) ~[?:?]
        at java.nio.file.Files.newInputStream(Files.java:160) ~[?:?]
        at ame.b(SourceFile:62) ~[server-1.20.4.jar:?]
        at amb.a(SourceFile:138) ~[server-1.20.4.jar:?]
        at amc.<init>(SourceFile:12) ~[server-1.20.4.jar:?]
        at net.minecraft.server.Main.main(SourceFile:112) ~[server-1.20.4.jar:?]
        at net.minecraft.bundler.Main.lambda$run$0(Main.java:54) ~[?:?]
        at java.lang.Thread.run(Thread.java:833) ~[?:?]
[11:43:49] [ServerMain/WARN]: Failed to load eula.txt
[11:43:49] [ServerMain/INFO]: You need to agree to the EULA in order to run the server. Go to eula.txt for m
ore info.
```

这意味着你需要同意Mojang的用户协议才能继续

此时你的文件结构应该是这样的：

```txt
.
├── eula.txt
├── libraries
├── logs
├── server.jar
├── server.properties
├── start.bat
└── versions
```

在其中找到`eula.txt`（内容如下）：

```properties
#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).
#Fri Feb 09 11:46:16 CST 2024
eula=false

```

将其中的

```properties
eula=false
```

改为

```properties
eula=true
```

后，重新打开`start.bat`即可
