# react-ins-progress-bar


English | [简体中文](./docs/zh-CN.md)

An instagram style progress bar 

![](https://img.shields.io/npm/v/react-ins-progress-bar?style=flat-square)
![](https://img.shields.io/npm/dm/react-ins-progress-bar?style=flat-square)

## Demo

[Live Demo](https://gikey.github.io/react-ins-progress-bar/)

## Installation

```bash
npm install react-ins-progress-bar --save
```

## How to use

To include this project you need to require the module by using CommonJS syntax or ES6 Modules Syntax (recommended).

```javascript
import { InsProgressBar, insProgress } from 'react-ins-progress-bar';
```

render the InsProgressBar component in the higher DOM node possible, such as:

```javascript
render() {
    return (
        <div>
            <InsProgressBar />
        </div>
    )
}
```

Then just call `insProgress.start()` and `insProgress.finish()`

```javascript
insProgress.start() // show progress bar
insProgress.finish() // hide progress bar
```

### Options

The <InsProgressBar /> component can receive some properties

#### Supported properties:

* `height` progress bar height (optional, default 5px)
* `delay` progress bar fadeOut time (optional, default 300ms) 
* `position` progress bar position (optional, top or bottom)
* `duration` animation duration (optional, default 3000ms)
* `colors` gradient colors (optional)

##### example

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

The `insProgress.start()` supported properties are the same as `<InsProgressBar />` except `delay` property , `insProgress.finish()` support `delay` property.

##### example

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

