# IP加端口访问，但是显示无法解析主机

::: info
本问题来源：大海
:::

## 问题描述

> 我就是IP加端口正常进服务器
>
> 我朋友也是IP加端口，但是显示无法解析主机
>
> （回复）看看冒号 看看有没有空格
>
> 没有空格
>
> （回复）让你朋友截图发给我？
>
> 好滴，我拉他进群可以不？
>
> （回复）行

## 解决方案

事实上，这个问题在发出的短短几分钟之后就被当事人自己解决了:

> 我解决了
>
> 谢谢大佬
>
> 用到中文冒号了

总之，如果遇到这种情况，一般要请求对方进行如下检查：

检查地址框内是否有多余的空格（VSCode自动格式化害我打不出来很离谱的东西，望周知）

检查是否使用了全角（中文标点符号，如）：

- `127.0.0.1`, `127.0.0.1:25565` √
- `127。0。0。1`, `127。0.0。1：25565` ×