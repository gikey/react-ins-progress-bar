const eventManager = {
    list: new Map(),

    on(event: string, callback: (...args: any[]) => void) {
        this.list.has(event) || this.list.set(event, [])
        this.list.get(event).push(callback)
        return this
    },

    emit(event: string, ...args: any[]) {
        if(!this.list.has(event)) {
            return this;
        }
        const events = this.list.get(event);
        events.forEach((callback: (...args: any[]) => void) => {
            setTimeout(() => callback.call(null, ...args), 0);
        });
        return this
    },

    off(event: string) {
        this.list.delete(event);
        return this;
    }
}

export default eventManager