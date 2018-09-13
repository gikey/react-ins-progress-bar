const eventManager = {
    list: new Map(),

    on(event, callback) {
        this.list.has(event) || this.list.set(event, [])
        this.list.get(event).push(callback)
        return this
    },

    emit(event, ...args) {
        if(!this.list.has(event)) return false
        this.list.get(event).forEach(callback  => setTimeout(() => callback.call(null, ...args)))
        // this.list.get(event).forEach(callback  => callback.call(null, ...args))
        return true
    },

    off(event = null) {
        this.list.delete(event)
        return this
    }
}

export default eventManager