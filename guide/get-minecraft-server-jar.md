# 要去哪里找服务端

一般来说，Minecraft服务端分为以下六种，分别有不同的支持以及适用范围，请自行取舍：

1. 官方服务端,只提供最基础的数据包加载能力
2. [Bukkit](https://dev.bukkit.org/)/[Spigot](https://www.spigotmc.org/)/[Paper](https://papermc.io/) 等Bukkit系插件端
3. 支持Bukkit系插件的Forge MOD/插件混合端 (如[Mohist](https://new.mohistmc.com/) [Arclight](https://github.com/IzzelAliz/Arclight) [CatServer](https://catmc.org/)等)
4. [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)/[Fabric](https://fabricmc.net/) 类的MOD端
5. 支持Sponge插件和Forge MOD的[Sponge](https://spongepowered.org/) Forge端
6. 仅提供Sponge插件支持的[Sponge](https://spongepowered.org/) Vanilla端

*近年一些Fabric**MOD**(如[Banner](https://new.mohistmc.com/),Cardboard等)还提供了对Bukkit系插件的加载能力,和Fabric服务端一起使用时也可以算作一种混合端*

以下是部分服务端的下载链接（直达网页，并不会自动下载）：

::: warning 为什么Spigot和Bukkit没有下载链接？
由于版权问题，Spigot/Bukkit已经停止提供直接下载的链接，您如果真的需要，请转而使用官方提供的构建工具（见表格）
:::

|类型|链接|
|---|---|
|Spigot/Bukkit 构建工具|<https://hub.spigotmc.org/jenkins/job/BuildTools/lastSuccessfulBuild/artifact/target/BuildTools.jar>|
|原版端|<https://www.minecraft.net/zh-hans/download/server>|
|[Sponge Forge/Vanilla](https://docs.spongepowered.org/stable/zh-CN/server/getting-started/implementations/spongeforge.html)|<https://spongepowered.org/downloads/>|
|[Paper](https://papermc.io/)|<https://papermc.io/downloads/paper>|
|[Fabric](https://fabricmc.net/)|<https://fabricmc.net/use/installer/>|
|[Forge](https://files.minecraftforge.net/net/minecraftforge/forge/)|<https://files.minecraftforge.net/net/minecraftforge/forge/>|
|[Mohist](https://new.mohistmc.com/)|<https://new.mohistmc.com/downloadSoftware?project=mohist/>|
|[Arclight](https://github.com/IzzelAliz/Arclight)|<https://github.com/IzzelAliz/Arclight/releases/>|
|[CatServer](https://catmc.org/)|<https://catmc.org/>|

::: warning Banner是一个**Fabric模组**,
[下载](https://new.mohistmc.com/downloadSoftware?project=banner)后需要作为一个**Fabric模组**在**服务端**加载使用
:::
