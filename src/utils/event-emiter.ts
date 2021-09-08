/**
 * @description 发布-订阅模式
 */
export interface EventMap {
  type: string,
  callback: Array<Function>
}

class EventEmiter {
  private eventCenter: Array<EventMap> = []

  public on (type: string, fn: Function) {
    let currentEvent = this.eventCenter.find(vv => vv.type === type)
    if (currentEvent) {
      currentEvent.callback.push(fn)
    }
  }

  public emit (type: string) {
    let currentEvent = this.eventCenter.find(vv => vv.type === type)
    if (!currentEvent) return
    let payload: Array<any> = [...arguments].slice(1)
    currentEvent.callback.forEach(fn => {
      this.callMethodWithErrorHandler(fn, payload)
    })
  }

  public off (type: string, fn: Function) {
    let currentEvent = this.eventCenter.find(vv => vv.type === type)
    if (!currentEvent) return
    let index = currentEvent.callback.findIndex(vv => vv === fn)
    if (index === -1) return
    currentEvent.callback.splice(index, 1)
  }

  private callMethodWithErrorHandler (fn: Function, params: Array<any>) {
    try {
      fn.apply(this, params)
    } catch (error) {
      throw error
    }
  }
}

export default EventEmiter