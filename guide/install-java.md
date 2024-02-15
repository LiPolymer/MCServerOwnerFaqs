# 如何安装Java运行时

::: info
目前本小节还处于待完善状态，并且急需细节补充

如果你有意向为文档做出贡献，欢迎前往[Github](https://github.com/Yang-qwq/MCServerOwnerFaqs)提交[Issue](https://github.com/Yang-qwq/MCServerOwnerFaqs/issues)或者[Pull Request](https://github.com/Yang-qwq/MCServerOwnerFaqs/pulls)
:::

## 如果你是**Linux**系统:
::: warning 注意
根据你所使用的发行版的不同,包管理器可能**不同**

如果您不知道包管理器是什么,我们十分**建议您更换到Windows系统**进行操作

如果本部分有个别包管理器没有,请提交[Issue](https://github.com/Yang-qwq/MCServerOwnerFaqs/issues)或[Pull Request](https://github.com/Yang-qwq/MCServerOwnerFaqs/pulls)提醒我们修改
:::

假设你要安装Java17(OpenJDK),根据你使用的包管理器的不同,在终端内执行以下命令:

::: code-group 
  
 ```sh [apt] 
 $ sudo apt install openjdk-17-jre
 ``` 
  
 ```sh [yum] 
 $ sudo yum install java-17-openjdk -y
 ``` 
  
 ```sh [pacman] 
 $ sudo pacman -S jre17-openjdk
 ``` 

:::

## 如果你是**Windows**系统:

对于大部分Windows版本,下载msi或者exe格式的安装包后双击运行安装即可

关于如何获取安装包,请参阅[获取Java](./get-java.md)

::: tip 提示

对于Windows10及以上版本,也可以使用[WinGet](https://learn.microsoft.com/zh-cn/windows/package-manager/winget/#install-winget)包管理器进行安装(一般已包含在系统内)

```powershell
winget install Microsoft.OpenJDK.17
```
:::