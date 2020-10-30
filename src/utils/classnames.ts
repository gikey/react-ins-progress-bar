export function classnames(...classNames: Array<string | {[key: string]: boolean} | string[] | undefined>) {
    const classes: string[] = [];
    for (const cls of classNames) {
        if (!cls) {
            continue;
        }
        if (typeof cls === "string") {
            classes.push(cls);
        } else if (Array.isArray(cls)) {
            cls.forEach((item) => {
                if (item) {
                    classes.push(item);
                }
            });
        } else if (typeof cls === "object" && cls) {
            Object.keys(cls).forEach((key) => {
                if (cls[key]) {
                    classes.push(key);
                }
            });
        }
    }
    return classes.join(" ");
}
