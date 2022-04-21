import EventEmitter from "../utils/event-emitter"

/**
 * @description DOM变化监测器
 */
class Observer extends EventEmitter{
  private options = {
    childList: true,  // 观察目标子节点的变化，是否有添加或者删除
    attributes: true, // 观察属性变动
    attributeOldValue: true,
    subtree: true,     // 观察后代节点，默认为 false
    characterData: true,
    characterDataOldValue: true
  }
  // 观察者对象
  public $observer: MutationObserver

  constructor (container: HTMLElement) {
    super()
    this.$observer = new MutationObserver(this.observerCallback.bind(this))
    this.$observer.observe(container, this.options)
  }

  private observerCallback (records: MutationRecord[], observer: MutationObserver): void {
    this.emit('change')
  }

  public disconnect (): void {
    this.$observer.disconnect()
  }
}

export default Observer