// import React, { Component } from 'react'
// import { ProgressBar } from './style'

// class InsProgressBar extends Component {
//     static defaultProps = {
//         height: '5px',
//         display: false
//     }
//     render() {
//         return (
//             <div className="ins-progress-bar">
//                 <ProgressBar
//                     height={this.props.height}
//                     display={this.props.display}
//                 />
//             </div>
//         )
//     }
// }

// export default InsProgressBar

import insProgress from './ins-react-progress-bar'
import InsProgressBar from './components/InsProgressBar'


export {
    insProgress,
    InsProgressBar
}