# AureliumSkills插件是英语

::: info
本问题来源：はぇてジェお
:::

## 问题描述

嗯

话说

为什么都改语言了

还是英语

那个等级的

## 解决方案

这个问题和之前的[箱子锁全是英文](./lockettepro-plugin-is-english.md)有着异曲同工之妙

但是问题主要来源于两方面：

1. 腐竹自己用的lunar，但他自己并不知道第三方端有的时候会默认声明自己是英语
2. 插件中有其他语言相关配置，自己调错了

不过对于本插件，调整该插件的语言应这么做：

打开`config.yml`，并搜索关键词`default-language`（如下）

```yml
hooks:
    HolographicDisplays:
        enabled: true
    DecentHolograms:
        enabled: false
default-language: en  # <--- 关注这里，该插件支持了很多语言，并且默认会跟随你客户端选择的语言

try-detect-client-language: true

languages:
    - en
    - es
    - id
    - fr
    - zh-TW
    - tr
    - pl
    - pt-BR
    - zh-CN
    - de
    - lt
    - ru
    - it
    - ko
    - cs
    - nl
    - ja

```

然后，将

```yml
default-language: en
```

改为

```yml
default-language: zh-CN
```

后，重启服务器或执行`/skill reload`即可完成语言的切换

::: tip
这么做有可能只对新玩家有效果（存疑）

如果你想让所有玩家都能切换到中文，建议继续阅读
:::

### 可能出现的问题

有一部分用户表示修改完之后还是显示其他语言（英语），这时候你可以考虑进行如下操作：

#### 关闭客户端语言自动检测

还记得之前提到过腐竹自己在用lunar客户端吗？这时候就可以考虑关闭这个功能，避免造成不必要的麻烦：

打开`config.yml`，并搜索关键词`try-detect-client-language`（非常靠近`default-language`，一般翻一翻就到了，如下），直接将

```yml
try-detect-client-language: true
```

改为

```yml
try-detect-client-language: false
```

后，重启服务器或者执行`/skill reload`即可完成修改

#### 由用户自己设置

::: warning
虽然该插件默认给了所有玩家修改自己语言的权限，但仍然建议你单独在权限组插件里设置权限节点

不知道什么是权限组？[看看这里](./setup-permission-group.md)
:::

::: warning
这么做只能修改玩家自己的显示语言，无法进行全局修改

如果你执意要进行全局修改，那么你应该再看看别的方法
:::

该插件提供了一个方法，可以由用户自行选择语言

只要让玩家输入`/skill lang <语种（如zh-CN）>`即可完成语言切换

### 关闭多语言支持

如果你的服务器完全没必要使用其他语言，可以考虑将`languages`节进行如下修改

::: tip
当然，举一反三的能力也很重要，像这样操作可以只保留你想要的语言（例如英语和中文）
:::

搜索关键词`languages`（如下）

```yml
languages:
    - en
    - es
    - id
    - fr
    - zh-TW
    - tr
    - pl
    - pt-BR
    - zh-CN
    - de
    - lt
    - ru
    - it
    - ko
    - cs
    - nl
    - ja

```

删除除了`zh-CN`以外的行（如下）：

```yml
languages:
    - zh-CN

```

后，重启服务器或执行`/skill reload`即可完成修改
