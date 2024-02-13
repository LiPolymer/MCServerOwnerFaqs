# 我的登录插件只能注册x个人

::: info
本问题来源：はぇてジェお
:::

## 问题描述

![](/images/F325575A4C4C7DAB03DDD4AE566A4680.jpg)

这是什么情况

知道吗

## 解决方案

一般来说，这种情况是由于你正在使用内网穿透类软件来为你的服务器提供广域网接入能力

对于市面上绝大部分穿透软件，你的服务端无法获取到玩家的真实IP，所有接入玩家的IP都为`127.0.0.1`

所以你的登录插件会误认为他们都是同一IP下的不同账号，并触发单IP账号数量保护

对于需要限制单IP账号数量的腐竹，我们建议你停止使用内网穿透软件
你可以采取以下几种方法提供广域网接入能力：

1. 停止使用内网穿透软件，并想办法获得一个公网IP
2. 使用虚拟网关提供网络联机（如[Radmin LAN](https://www.radmin-lan.cn/)，[ZeroTier](https://www.zerotier.com/)等）

对于希望继续使用内网穿透的腐竹，也需要按照你使用了哪个插件插件来进行对应的修改：

::: tip
如果你无法判断你在使用哪个登录插件，请执行`/plugins`后依次寻找即可
:::

### Authme

搜索`config.yml`中的`maxRegPerIp`（如下）

```yml
        #...
        # Allowed commands for unauthenticated players
        allowCommands: 
        - /login
        - ...
        - /totp
        # Max number of allowed registrations per IP (每个允许注册的最大用户数量)
        # The value 0 means an unlimited number of registrations! (数值0意味着不作限制!)
        maxRegPerIp: 1  # <--- 关注这里
        # Minimum allowed username length
        minNicknameLength: 3
        #...
```

并将`maxRegPerIp`的值改为你想要的（0为不限制）

```yml
        maxRegPerIp: 0  #不限制单IP用户数
```

最后，保存配置文件，执行`/authme reload`即可完成修复

### CatSeedLogin

直接执行`/catseedlogin setIpRegCountLimit <数量>`即可
