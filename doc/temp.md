<!--
 * @Author: your name
 * @Date: 2021-10-31 11:06:03
 * @LastEditTime: 2021-11-26 16:17:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /graduation-project-master/doc/temp.md
-->
- [ ] 1.问题：safari浏览器中，不能将2021-11-01 10:14:00解析

  ```
  Date.parse("2021-11-01 10:14:00");  // NAN
  new Date("2021-11-01 10:14:00");    // Invalid Date
  ```

- [ ] 2.问题：关于html中标签的focus等伪类

  3.git提交文件系统权限问题

  ```
  pkcile@localhost graduation-project-master % git commit -m "定位问题"
  error: 权限不足，无法在仓库对象库 .git/objects 中添加对象
  error: 权限不足，无法在仓库对象库 .git/objects 中添加对象
  error: 无法创建树对象
  ```

  赋予权限用户pkcile权限

  ```
  sudo chown -R pkcile:group .git
  ```

  4.定位在各个浏览器的情况统计

  ```
  电脑：
  
  手机：
  QQ内置：  不可行
  微信内置： 可行，采用公众号或小程序的方式，初步公众号开发
  等等
  
  ```

  5.评论动态页面制作


6. 
```
npm run serve -- --port 8033  
yarn serve --port 1232
```

7.
极速打卡模式
备用链接

如果服务器崩了，离线的方式来存储打卡信息，服务！！！

8.
好友在线服务，好友oooo动态显示

9.
如何修改地图icon的border-radius

10.
组件间值的传递
图片在html css js中的引入方式

路由的跳转标签

11.
地图显示，如果非首屏、非postion的情况
显示不出来的原因：？


12.
地图显示问题
同一路由不同组件层级，进行visibility设置，最后的展示地图显示，如何修改为初始化后的位置