# Front-end-daily-small-cases
每日一个前端的小案例，本人是前端初学者，此项目的目的在于熟悉CSS和JAvaScript。

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
  <summary> 1.9 ： 二维码生成器（qrcode.js）  </summary>
  【参考视频】| 【二维码生成器| 带有源代码的Javascript项目】 https://www.bilibili.com/video/BV1mA411f7p9/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 生成二维码主要借助了qrcode.js这个js库，当然，在写CSS时又见识了一些新属性，在js中涉及了异步函数的使用（关于异步暂时了解较少，但是在这个案例中的使用也很简单，关键字async await）。另外，感觉收获较大的是见识了另外一种编码习惯，在写HTML结构的过程中同步去写CSS样式，感觉这样写其实更直观，比加完所有控件后再去理清结构写CSS样式更好一些，之后自己写也多多尝试。另外，js代码部分感觉该作者也写的条例清晰，非常规范。也算这个案例学习的意外之喜吧。另外，还有一个小bug没有解决，在设置二维码尺寸时，改变的是图片的整体大小而非二维码的复杂程度，与视频效果不符。
</details>

<details>
  <summary> 1.10 ： 漫天星特效 </summary>
  【参考视频】|【超简单实现css满天星特效】 https://www.bilibili.com/video/BV1ke4y1G7Bp/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03 </br>
  【案例总结】| 案例较简单，值得注意的是使用了hsl，与rgb一样是一种颜色表示方式。</br>
  【稍加改动】| 因为原案例较简单，所以尝试了一下使用scss来重写css，但是遇到了一个问题：没办法在scss中读取到HTML空间在style中声明的变量，以及hsl函数中不能使用变量做参数，必须使用具体颜色。不知道是插件功能问题还是scss语法原因。未解决。
</details>

<details>
  <summary> 1.11 ： 文字转语音功能 </summary>
  【参考视频】|【js实现文字转语音】 https://www.bilibili.com/video/BV1SR4y1m7Am/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 使用的是SpeechSynthesisUtterance，这是H5中新增的可将指定文本转为指定类型语音的API。</br>
</details>

<details>
  <summary> 1.12 ： 3d卡片悬停倾斜（vanilla-tilt.js） </summary>
  【参考视频】|【使用vanilla-tilt.js制作3D倾斜悬停效果的卡片】 https://www.bilibili.com/video/BV1Fv4y1971b/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 在这个案例中使用了一个效果很好看的js库vanilla-tilt.js，其功能是设置鼠标悬停的各种效果，这里是倾斜和反光体现3d效果。但是该案例的主要工作依然是在CSS。做了一个典型的grid三栏布局，可以自适应宽度进行自动换行，只需要三行代码就实现了这个效果，还是很方便的。</br>
</details>

<details>
  <summary> 1.13 ： 一个抖动的大水滴 </summary>
  【参考视频】|【使用CSS绘制动态水滴效果】 https://www.bilibili.com/video/BV1Qy4y1L7ot/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 这个案例没有涉及到什么新东西，但是设计水滴的思路非常棒。画水滴轮廓借助了这个可视化工具https://9elements.github.io/fancy-border-radius/。</br>
</details>

<details>
  <summary> 1.14 -> 2.14 ： 监测网络连接状态 </summary>
  【参考视频】|【使用HTML、CSS和JavaScript创网络连接状态检测】 https://www.bilibili.com/video/BV1T24y1v7ab/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 无</br>
  【无关的话】| 年前做的这个案例，回来已经有点记不清了，总结也就不知道写点啥。现在回校了继续坚持吧。</br>
</details>

<details>
  <summary> 2.15 : 响应式彩色魔方 </summary>
  【参考视频】| 【很酷炫！纯CSS实现立方体矩阵鼠标悬停动画效果】 https://www.bilibili.com/video/BV1JK411D7y9/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 纯css实现，亮点主要在于魔方图案的构建，利用skew弄倾斜的面，使用front和after伪元素来复制。颜色变化的效果是hue-rotate，这个已经用过几次了。</br>
</details>

<details>
  <summary> 2.16 ： 图片聚焦效果 </summary>
  【参考视频】|【HTML＋Less＋JavaScript完成图片聚焦效果，好看的效果又增加了～】 https://www.bilibili.com/video/BV1Ay4y1d7TG/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 在这个例子里体验了一下用less来写样式，亮点是利用了less的继承特性，可以设计在鼠标悬停下各子元素的不同的效果。与sess相比，less可以直接引入html，而sess需要转为CSS再被引入html。</br>
</details>

<details>
  <summary> 2.17 ：动态边框  </summary>
  【参考视频】|【厉害的CSS边框动画效果 | 快速CSS技巧】 https://www.bilibili.com/video/BV1ST411S72z/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 本例中关注了如何给div的边框添加动态的效果，一开始猜测是对border的阴影进行处理（比如水滴的那个阴影），但是后面才发现是直接使用小的div来假装边框，思路还是很简单的</br>
</details>

<details>
  <summary> 2.18 ：波浪页脚  </summary>
  【参考视频】|【CSS】流动波浪页脚】 https://www.bilibili.com/video/BV1Ax4y157AB/?share_source=copy_web</br>
  【案例总结】| 本例想实现一个波浪的效果，使用了SVG矢量作图。有点偏数学，是通过一些参数来直接在网页中画图，没有更详细地去看这个svg怎么画，也许之后会深入了解。感觉是一个很厉害的东西，如果掌握了可以在网页上实现更加灵活的效果。</br>
</details>

<details>
  <summary> 2.23 ： Stepper触摸按钮 </summary>
  【参考视频】|【使用HTML、CSS和JavaScript创建惊人的Stepper触摸按钮 | 源码下载】 https://www.bilibili.com/video/BV1hj411K7rR/?share_source=copy_web&vd_source=ba60c048e4ef44a77b68ff234c975e03</br>
  【案例总结】| 本例做了一个按钮，鼠标在经过的时候会有拖动中间元素的效果，往左拖就会使计数减一，往右拖就会使计数加一，整体来说相对简单。</br>
</details>

