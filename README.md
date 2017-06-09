# my-flappy-bird
利用canvas实现简单制作flappy-bird，功能不是特别全面

#### 整个过程中主要运用到，面对对象，缓存.

##### 主要解决的问题:

1.多图片同时加载；

2.利用面对对象，将内部的js代码，进行了拆分优化；

###### 主要步骤

1.先让小鸟本身运动起来, 所以利用了一个requestAnimationFrame方法调用函数从而达到一个递归的效果，该方法会根据当前的时间去计算最合理的调用时间；

2.计算出小鸟下落的速度和距离，将其运用到小鸟当前所在的y坐标上，使其不断的增加，添加点击事件，每次点击上升最大掉落的距离的倍数;

3.利用每次下落的速度，计算出画布坐标旋转时的角度，每次旋转后让画布还原原始状态;

4.后面的背景，先设定固定的移动距离，让其往X轴负方向移动即可，判断到达自身宽度时，回到最后一张所在的位置；

5.判断小鸟Y轴的距离是否到达整个画面的顶部和底部和通过canvas中的isPointInPath方法，判断小鸟是否撞上障碍物;