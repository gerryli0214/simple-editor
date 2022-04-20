/**
 * @description 划取菜单
 */
import { EditorInterface, PopMenuImpl } from '../types/global'
import EventEmitter from '../utils/event-emitter'
import { debounce } from 'lodash'

class PopMenu extends EventEmitter implements PopMenuImpl{
  readonly NAME = 'popover'
  // 编辑器
  public editor: EditorInterface
  // 注册事件对象
  private eventMap: Map<string, any> = new Map()
  // 鼠标点击的区域
  private position: {left: number, top: number} = {
    left: 0,
    top: 0
  }

  constructor (editor: EditorInterface) {
    super()
    this.editor = editor
    this.init()
  }

  private init () {
    // 选区变化事件
    if (this.eventMap.get('selectionEvent')) {
      document.removeEventListener('selectionchange', this.eventMap.get('selectionEvent'))
    }
    this.eventMap.set('selectionEvent', debounce(this.handleSelectionEvent.bind(this), 50))
    document.addEventListener('selectionchange', this.eventMap.get('selectionEvent'))
    // 编辑器鼠标按下事件
    debugger
    if (this.eventMap.get('mousedownEvent')) {
      this.editor.$container.removeEventListener('mousedown', this.eventMap.get('mousedownEvent'))
    }
    this.eventMap.set('mousedownEvent', this.handleMousedown.bind(this))
    this.editor.$container.addEventListener('mousedown', this.eventMap.get('mousedownEvent'))
  }

  private handleSelectionEvent (e) {
    let range = this.editor.selection.getCurrentRange()
    if (!range || range.collapsed) return
    debugger
  }

  private handleMousedown (e) {
    this.position = {
      top: e.clientY,
      left: e.clientX
    }
  }
}

export default PopMenu