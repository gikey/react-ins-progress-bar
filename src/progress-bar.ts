import { ACTION } from "./utils/constant";
import eventManager from "./utils/eventManager";
import InsProgressBar, {
    IInsProgressStart,
    IInsProgressFinish,
} from "./components/InsProgressBar";

let progressBar: InsProgressBar | null,
    state = "noop",
    cacheStartFn: () => void,
    cacheFinishFn: () => void;

function emitEvent(
    action: ACTION,
    options: Partial<IInsProgressStart & IInsProgressFinish>
) {
    if (!progressBar) {
        if (action === ACTION.SHOW) {
            cacheStartFn = ((options) => () => insProgress.start(options))(
                options
            );
            return;
        }
        state = "pending";
        cacheFinishFn = ((options) => () => insProgress.finish(options))(
            options
        );
        return;
    }
    eventManager.emit(action, options);

    if (state === "pending") {
        state = "noop";
        setTimeout(() => {
            cacheFinishFn();
        });
    }
}

const insProgress = Object.assign(
    (options = {}) => eventManager.emit(ACTION.SHOW, options),
    {
        start(options: IInsProgressStart = {}) {
            emitEvent(ACTION.SHOW, options);
        },
        finish(options: IInsProgressFinish = {}) {
            emitEvent(ACTION.CLEAR, options);
        },
    }
);

eventManager
    .on(ACTION.DID_MOUNT, (progressBarInstance) => {
        progressBar = progressBarInstance;
        cacheStartFn && cacheStartFn();
    })
    .on(ACTION.WILL_UNMOUNT, () => (progressBar = null));

export default insProgress;
