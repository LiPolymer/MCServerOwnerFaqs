# 箱子锁全是英文

::: info
本问题来源：はぇてジェお
:::

## 问题描述

......

箱子锁是在哪看都是英语

## 解决方案

一般来说，这种翻译相关的问题都拥有一个通用解决方案，需要根据你使用的插件的实际情况选择：

1. 修改配置文件参数（类似于将`language`从`en_US`改为`zh_CN`）
2. 汉化语言文件（一般类似于`lang.yml`，`en_US.yml`，`en_US.lang`等）
3. 有一部分插件会将语言与配置文件写到一起，故需要汉化`config.yml`
4. 从源码汉化后编译（不推荐新手尝试）

当然，对于箱子锁插件的话，解决方法如下：

打开`config.yml`，并搜索关键词`language-file-name`（如下）

```yml
# Configuration file
# https://github.com/connection-lost/LockettePro/wiki/*-config.yml
# If there are missing entries, you can add them manually.

language-file-name: 'lang.yml'  # <--- 关注这里，该值意味着将会被加载的语言文件，如果需要简体中文的话，您需要改为`lang_zh-cn.yml`
enable-quick-protect: true
enable-uuid-support: false
```

接下来，将

```yml
language-file-name: 'lang.yml'
```

改为

```yml
language-file-name: 'lang_zh-cn.yml'
```

后，执行`/lock reload`或者重启服务器后即可看到效果
