# Residence圈地有限制怎么修改

::: info
本问题来源：はぇてジェお
:::

## 问题描述

![](/images/E9BEF012D388C9631FA487990DD7B016.png)

啊？

有限制

咋改

## 解决方案

通常来说，这类问题分为两个原因：

1. 插件本体配置错误
2. 权限组配置不当，导致应用了错误的限制条件

很明显，该问题的原因经过进一步友好交流后，很明显是前者的原因更大，那么以下是解决方法：

打开插件配置文件夹下的`groups.yml`，依次导航到节点`Groups`->`Default`->`Residence`（如下）

```yml
# These groups correspond to the Permissions groups defined in your '<worldname>.yml'
Groups:
    Default: #group name, DONT remove this group
       # Information about the Residence zone that the player can define.
       #Uncomment the lines below to mirror this config to other groups.
       #Mirror:
         #- 'group1'
         #- 'group2'
       Residence:
           # Determins if this group can create residences or not.  This option can be overriden with the permissions node 'residence.create'
           CanCreate: true
           # The maximum number of Residences a player can have.
           MaxResidences: 3
           # The maximum number of physical areas a residence can have.
           MaxAreasPerResidence: 2
           # The maximum number of blocks a Residence can be, East to West (X).
           MaxEastWest: 16
           # (Optional) The minimum number of blocks a Residence can be, East to West (X).
           MinEastWest: 3
           # The maximum number of blocks a Residence can be, North to South (Z).
           MaxNorthSouth: 16
           # (Optional) The minimum number of blocks a Residence can be, North to South (Z).
           MinNorthSouth: 3
           # The maximum number of blocks a Residence can be, High to Low (Y).
           MaxUpDown: 320
           # (Optional) The minimum number of blocks a Residence can be, High to Low (Y).
           MinUpDown: 3
           # The lowest altitude this group is allowed to protect.
           MinHeight: -64
           # The highest altitude this group is allowed to protect.
           MaxHeight: 320
            # The maximum amount of subzones can current area have.
           MaxSubzonesInArea: 3
            # The maximum recursive depth that subzones can go.
            # A subzone within a subzone within the Residence zone would be a depth of 2.
            # Set to 0 to disable subzones.
           SubzoneDepth: 3
           # (Optional) The maximum number of blocks a Residence Subzone can be, East to West (X).
           SubzoneMaxEastWest: 16
           # (Optional) The minimum number of blocks a Residence Subzone can be, East to West (X).
           SubzoneMinEastWest: 3
           # (Optional) The maximum number of blocks a Residence Subzone can be, North to South (Z).
           SubzoneMaxNorthSouth: 16
           # (Optional) The minimum number of blocks a Residence Subzone can be, North to South (Z).
           SubzoneMinNorthSouth: 3
           # (Optional) The maximum number of blocks a Residence Subzone can be, High to Low (Y).
           SubzoneMaxUpDown: 320
           # (Optional) The minimum number of blocks a Residence Subzone can be, High to Low (Y).
           SubzoneMinUpDown: 3
           # Whether or not to allow teleporting to Residences.
           CanTeleport: true
           # Allow or Disallow the use of /res unstuck, to get yourself out of a residence if stuck in one somehow
           Unstuck: true
           # Allow or Disallow the use of /res kick, to kick player from residence.
           Kick: False
           # Allow or Disallow the use of the /res select command, if disabled they can only use the selection tool.
           SelectCommandAccess: true
           # Allow or Disallow the group to access the Blacklist/Ignorelist for residences they own.
           ItemListAccess: true
       # Options relating to enter and leave messages on the residence.
```

然后，你需要修改很多地方，这里不一一解释了，将以下内容

```yml
           # The maximum number of Residences a player can have.
           # 每个玩家最大可以持有的领地数（包括子区域/存疑）
           MaxResidences: 3
           # The maximum number of physical areas a residence can have.
           # 每个玩家最大可以持有的物理领地数（存疑）
           MaxAreasPerResidence: 2
           # The maximum number of blocks a Residence can be, East to West (X).
           # 一个领地东西方向的最大尺寸
           MaxEastWest: 16
           # The maximum number of blocks a Residence can be, North to South (Z).
           # 一个领地南北方向的最大尺寸
           MaxNorthSouth: 16
           # The maximum number of blocks a Residence can be, High to Low (Y).
           # The lowest altitude this group is allowed to protect.
           # 领地的最大高度
           MaxHeight: 320
```

改为合适的数即可（如下）

```yml
           MaxResidences: 5
           MaxAreasPerResidence: 50
           MaxEastWest: 1024
           MaxNorthSouth: 1024
           MaxHeight: 320
```

::: tip
这么做会让所有人的圈地都没有限制，可能会出现一个人圈完服务器所有地块的情况，我们仍然建议将这个数保持在一个合理的范围内，而不是想办法彻底关掉
:::
