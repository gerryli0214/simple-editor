/**
 * @description 发布-订阅模式
 */

import { EventEmitterInterface as EventEmitterInterface, EventMap } from "../types/global"

class EventEmitter implements EventEmitterInterface{
  private _eventCenter: Array<EventMap> = []

  get eventCenter () {
    return this._eventCenter
  }

  public on (type: string, fn: Function) {
    let currentEvent = this.eventCenter.find(vv => vv.type === type)
    if (currentEvent) {
      currentEvent.callback.push(fn)
    } else {
      this.eventCenter.push({
        type,
        callback: [ fn ]
      })
    }
  }

  public once (event: string, fn: Function) {
    let self = this
    const onceFn = function () {
      this.off(event, onceFn)
      fn.apply(self, arguments)
    }
    onceFn.fn = fn
    this.on(event, onceFn)
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

export default EventEmitter