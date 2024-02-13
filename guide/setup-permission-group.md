# 设置权限组

::: info
目前文档还处于待完善状态，并且急需条目补充

如果你有意向为文档做出贡献，欢迎前往[Github](https://github.com/Yang-qwq/MCServerOwnerFaqs)提交[Issue](https://github.com/Yang-qwq/MCServerOwnerFaqs/issues)或者[Pull Request](https://github.com/Yang-qwq/MCServerOwnerFaqs/pulls)
:::

> 权限组（插件）是一类通过配置后可以控制玩家行为以及可以使用的功能的插件（如`/gamemode`，破坏方块），部分插件（如[LuckPerms](#luckperms)）还提供了修改玩家元数据的功能
> <p style="text-align: right;">————<a href="https://yang-qwq.top/">Yang-qwq</a></p>

::: warning
一般来说一个服务器（单端）内只能由一个权限组，就如同一山不容二虎

如果你这么做，轻则玩家什么都做不了，重则服务器崩溃，请不要在生产服务器中这么玩！
:::

以下是权限组类插件配置指南，请根据你服务器实际使用的权限组插件进行配置

## LuckPerms

> LuckPerms 是为 Minecraft 设计的服务器权限插件。它允许服务器管理员通过创建组和分配权限来控制玩家可以使用的功能。
>
> 其具有的优势:
>
> - 响应迅速 - 在开发之初便已经将性能和可扩展性放在首位。
> - 深受信赖 - 被数以千计的服务器管理者使用，再大型的服务器也有我们的身影。
> - 简易上手 - 通过命令，配置文件，网页版编辑器等方式添加你的权限。
> - 高效灵活 - 支持多种不同的存储方式与服务器平台。
> - 可客制化 - 为你的服务器提供大量的自定义选项和设置，以便你最大程度客制化使用体验。
> - 永远免费 - 由于许可证的选用，它可以做到永远免费地提供下载和使用。
>
> <p style="text-align: right;">————<a href="https://luckperms.net/">LuckPerms官网</a></p>

::: tip
如果你的英语比较好，建议下一步直接跳转到[官网Wiki](https://luckperms.net/wiki/Home)，而不是留在这里继续看
:::

对于新手腐竹来说，LuckPerms的配置极其简单——因为该插件拥有WebUI

在插件安装完毕后，你可以通过`/lp editor`直接打开WebUI配置，插件将为你发送一个独一无二的编辑链接（如下）：

::: warning
将该链接发给他人存在一定风险，这意味着他人可以查看你的权限组（但不能编辑，除非你在插件中配置信任）
:::

未完待续
