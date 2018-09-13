# react-ins-progress-bar

An instagram style progress bar 

## Demo

[Live Demo](https://www.xieluping.cn/react-ins-progress-bar/)

## Installation

```bash
npm install react-ins-progress-bar --save
```

## How to use

To include this project you need to require the module by using CommonJS syntax or ES6 Modules Syntax (recommended).

```javascript
import { InsProgressBar, insProgress } from 'react-ins-progress-bar'
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

* `height` progress bar height
* `delay` progress bar fadeOut time (default 300ms) 
* `position` progress bar position (top or bottom)

##### example

```javascript
<InsProgressBar 
    height={'10px'} 
    delay={200} 
    position={insProgress.POSITION.TOP}
/>
```

The `insProgress.start()` supports height, colors attributes in the following way, `insProgress.finish()` support delay attribute.

##### example

```javascript
insProgress.start({
    'height': '10px',
    'position': insProgress.POSITION.TOP,
})
insProgress.finish({
    'delay': 100
})
```

