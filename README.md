# Front-end-daily-small-cases
每日一个前端的小案例，主要是CSS+JS

<details>
  <summary> 1.1 ： 带有手风琴效果的图片轮播 </summary>
  参考视频：【HTML5+CSS3+JS小实例：带标题描述的圆角图片手风琴效果】 https://www.bilibili.com/video/BV1WS4y1K7JH/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
图片来源：https://www.zmtc.com/bizhi/1512.html</br>
案例总结：none
</details>

<details>
  <summary> 1.2 : 一个简单的有毛玻璃质感且会轮换图片的登录界面  </summary>
  参考视频： 【[HTML+CSS+JS]高级玻璃质感登录界面】 https://www.bilibili.com/video/BV1rP411K7fv/?share_source=copy_web</br>
  图片来源： 有什么美的电脑壁纸? - 懒雯养花的回答 - 知乎 https://www.zhihu.com/question/361816826/answer/1005514285</br>
  案例总结： 初次使用了scss来写CSS样式，且在JS中使用了一个反字符串的用法。</br>
</details>

<details>
  <summary> 1.3 ： 这是一个主要依靠Js实现的字母自由浮动的特效  </summary>
  参考视频： 【【JavaScript】前端超好玩的小案例-调皮的字母】 https://www.bilibili.com/video/BV1e44y1C7wD/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
案例总结： 这个案例还没有理解清楚，主要是Js部分的代码有点多，然后不知道复制的哪里错了，还不能实现自动浮动。
</details>

<details>
  <summary> 1.4 ： 滚轮视差效果  </summary>
  参考视频： 【[Css+Js]这该死的高级感 滚轮视差响应】 https://www.bilibili.com/video/BV1Ag411u7RH/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  案例总结： 又是一个未完全做完的案例，这两天有点忙了，但是先把代码交上去吧，后面必须回来做完。
</details>

<details>
  <summary> 1.5 ： 日月切换效果  </summary>
  参考视频： 【HTML5+CSS3+JS小实例：日月交替效果】 https://www.bilibili.com/video/BV1hT4y117Ed/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  案例总结： 一个简单的切换效果，js写的简单而精确，另外学到了如何只用CSS画一个月亮形状的图案。
</details>

<details>
  <summary> 1.6 ： 三叶结加载动画  </summary>
  参考视频： 【CSS加载环形动画效果】 https://www.bilibili.com/video/BV1Rb4y187q9/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  案例总结： 只使用了CSS进行实现，亮点在于如何利用border画出一条曲线，同时还使用了一个简单的动画，在这个案例中我把相关的CSS属性都了解清楚了，其中还有一个小点即<code>top: inherit;</code>的效果还没有理解清除。
</details>

<details>
  <summary> 1.7 ： ∞无限循环动画  </summary>
  参考视频： 【CSS之无限循环】 https://www.bilibili.com/video/BV12a411Y72n/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  案例总结： 只使用了CSS进行实现，亮点在于如何进行光点的布局以及对几个变换方法的使用，如<code>filter：hue-rotate()</code>是色相旋转，可以实现颜色变化；<code>rotate()</code>实现旋转，画出∞的形状；<code>scale</code>实现缩放，实现光点闪烁的效果。另外，还使用了在HTML结构中使用<code><span style="--i:0"></span></code>这样的写法给CSS样式文件传递变量的用法，这是第一次见。</br>
  题外话：这两天模仿的主要是纯CSS实现的两个小案例，但是在写的时候有边查文档边看CSS各种属性的效果，所以收获反而感觉比开始的几次简单的抄写代码然后看到能够复现就没有去详细了解来的收获更大，所以接下来几天应该还是继续找一些纯CSS实现的案例来做，毕竟JS目前好像没办法在VScode中直接查找官方文档，等想办法解决了这个问题后再去尝试一些涉及JacaScript的案例吧。
</details>

<details>
  <summary> 1.8 ： 打字动画效果  </summary>
  参考视频： 【代码讲解】纯CSS实现打字动效】 https://www.bilibili.com/video/BV1cV4y1A7yy/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  案例总结： 只使用了CSS进行实现，亮点在于对打字效果的动画分解，使用了两个动画共同作用来实现目标效果。
</details>

<details>
  <summary> 1.9 ： 二维码生成器  </summary>
  参考视频： 【二维码生成器| 带有源代码的Javascript项目】 https://www.bilibili.com/video/BV1mA411f7p9/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  案例总结： 生成二维码主要借助了qrcode.js这个js库，当然，在写CSS时又见识了一些新属性，在js中涉及了异步函数的使用（关于异步暂时了解较少，但是在这个案例中的使用也很简单，关键字async await）。另外，感觉收获较大的是见识了另外一种编码习惯，在写HTML结构的过程中同步去写CSS样式，感觉这样写其实更直观，比加完所有控件后再去理清结构写CSS样式更好一些，之后自己写也多多尝试。另外，js代码部分感觉该作者也写的条例清晰，非常规范。也算这个案例学习的意外之喜吧。另外，还有一个小bug没有解决，在设置二维码尺寸时，改变的是图片的整体大小而非二维码的复杂程度，与视频效果不符。
</details>
