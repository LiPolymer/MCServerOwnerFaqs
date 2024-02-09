# 我的登录插件只能注册X个人

::: info
本问题来源：はぇてジェお
:::

## 问题描述

![](/images/F325575A4C4C7DAB03DDD4AE566A4680.jpg)

这是什么情况

知道吗

## 解决方案

一般来说，这种情况分为以下几种：

1. 您正在使用内网穿透类软件来为您的服务器提供公网连接
2. 您的登录插件配置文件错误

您可以采取以下几种方法修复：

1. 停止使用内网穿透软件，并想办法获得一个公网IP
2. 使用虚拟网关提供网络联机（如[Radmin LAN](https://www.radmin-lan.cn/)，[ZeroTier](https://www.zerotier.com/)等）
3. 修改您插件的配置

::: tip
如果您无法判断您在使用哪个登录插件，请执行`/plugins`后依次寻找即可
:::

### Authme

搜索`config.yml`中的`maxRegPerIp`（如下）

```yml
        # Allowed commands for unauthenticated players
        allowCommands: 
        - /login
        - /log
        - /l
        - /register
        - /reg
        - /email
        - /captcha
        - /2fa
        - /totp
        # Max number of allowed registrations per IP
        # The value 0 means an unlimited number of registrations!
        maxRegPerIp: 1  # <--- 关注这里
        # Minimum allowed username length
        minNicknameLength: 3
        # Maximum allowed username length
        maxNicknameLength: 16
```

并将`maxRegPerIp`的值改为你想要的（0为不限制）

```yml
        maxRegPerIp: 114514  # <--- 修改这里
```

最后，保存配置文件，执行`/authme reload`即可完成修复

### CatSeedLogin

直接执行`/catseedlogin setIpRegCountLimit <数量>`即可
