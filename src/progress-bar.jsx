import { ACTION, POSITION } from './utils/constant'
import eventManager from './utils/eventManager'

let progressBar = null

function emitEvent(action, options) {
    if(progressBar !== null) {
        return eventManager.emit(action, options)
    }
    console.error('InsProgressBar component must be mounted first')
}

const insProgress = Object.assign(
    (options = {}) => eventManager.emit(ACTION.SHOW, options),
    {
        start(options = {}) {
            emitEvent(ACTION.SHOW, options)
        },
        finish(options = {}) {
            emitEvent(ACTION.CLEAR, options)
        },
        POSITION
    }
)

eventManager
    .on(ACTION.DID_MOUNT, progressBarInstance => progressBar = progressBarInstance)
    .on(ACTION.WILL_UNMOUNT, () => progressBar = null)

export default insProgress