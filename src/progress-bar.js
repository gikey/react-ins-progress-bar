import {
    ACTION,
    POSITION
} from './utils/constant'
import eventManager from './utils/eventManager'

let progressBar = null,
    state = 'noop',
    cacheStartFn,
    cacheFinishFn

function emitEvent(action, options) {
    if(!progressBar) {
        if(action === ACTION.SHOW) {
            return cacheStartFn = (options =>  () => insProgress.start(options))(options)
        }
        state = 'pending'
        return cacheFinishFn = (options =>  () => insProgress.finish(options))(options)
    }
    eventManager.emit(action, options)

    if(state === 'pending') {
        state = 'noop'
        setTimeout(() => {
            cacheFinishFn()
        })
    }
}

const insProgress = Object.assign(
    (options = {}) => eventManager.emit(ACTION.SHOW, options), {
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
    .on(ACTION.DID_MOUNT, progressBarInstance => {
        progressBar = progressBarInstance
        cacheStartFn && cacheStartFn()
    })
    .on(ACTION.WILL_UNMOUNT, () => progressBar = null)

export default insProgress