## 数据库设计

（一）用户信息表 `user info table`

- 账号（手机号／邮箱地址）`name`
- 手机号 `mobile`
- QQ `qq`
- 微信 `wechat`
- 邮箱 `email`

（二）发布信息表 `information table`

- 信息类型（承运／发货）`info-type`
- 发布人（承运方／发货方）`created-by`
- 发布时间 `created-time`
- 发货地（成都）`origin`
- 目的地（上海）`destination`
- 时间频率（单次、每天、隔天、工作日、周末、节假日）`frequency`
- 具体时间（8:00）`time`
- 联系方式（手机号、微信号、QQ号）`mobile/wechat/qq`
- 内容   `content`

（三）消息表 `message table`

- 消息发布人`created-by`
- 发布时间 `created-time`
- 消息内容 `content`
- 推送对象 `push-object`
- 推送时间 `push-time`
- 是否推送消息给用户 `has-pushed`
- 用户是否查看消息 `has-viewed`