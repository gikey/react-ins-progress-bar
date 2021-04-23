# react-ins-progress-bar

[English](../README.md) | 简体中文

一个类似 instagram 风格的进度条

![](https://img.shields.io/npm/v/react-ins-progress-bar?style=flat-square)
![](https://img.shields.io/npm/dm/react-ins-progress-bar?style=flat-square)
## 示例

[在线示例](https://gikey.github.io/react-ins-progress-bar/)

## 安装

```bash
npm install react-ins-progress-bar --save
```

## 使用

项目中引入

```javascript
import { InsProgressBar, insProgress } from 'react-ins-progress-bar';
```

尽可能在高层级的 DOM 节点上使用，例如:

```javascript
render() {
    return (
        <div>
            <InsProgressBar />
        </div>
    )
}
```

只需要调用 `insProgress.start()` 和 `insProgress.finish()` 方法

```javascript
insProgress.start() // 显示进度条
insProgress.finish() // 隐藏进度条
```

### 选项

InsProgressBar 组件接收如下属性

#### 支持属性:

* `height` 进度条高度 (可选, 默认 5px)
* `delay` 进度条淡出时间 (可选, 默认 300ms) 
* `position` 进度条位置 (可选, top 和 bottom)
* `duration` 动画时间周期 (可选, 默认 3000ms)
* `colors` 渐变色 (可选)

##### 示例

```javascript
<InsProgressBar 
    height="10px"
    delay={200} 
    position="top"
    colors={`
        #1abc9c 15%,
        #2ecc71 15%,
        #3498db 12%,
        #9b59b6 32%,
        #34495e 35%,
        #f1c40f 55%,
        #e67e22 59%,
        #e74c3c 63%,
        #95a5a6 92%`
    }
/>
```

`insProgress.start()` 方法支持的属性除了没有`delay`，其他跟 `<InsProgressBar />` 一样 ，`insProgress.finish()` 支持 `delay` 属性

##### 示例

```javascript
insProgress.start({
    'height': '10px',
    'position': 'bottom',
    'duration': 3000,
})
insProgress.finish({
    'delay': 100
})
```

