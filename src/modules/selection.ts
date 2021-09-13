import { EditorInterface } from "../types/global"

/**
 * @description 处理选区相关内容
 * 如果单页面（文本区不是iframe），mousedown需要手动保存当前选区
 */
class Selection {
  // 保存当前选取
  _currentRange: Range = null
  // 编辑器对象
  editor: EditorInterface = null

  constructor(editor: EditorInterface) {
    this.editor = editor
    this._currentRange = null
  }

  saveRange (range: Range) {
    if (range) {
        this._currentRange = range
        return
    }

    const selection = window.getSelection()
    if (selection.rangeCount === 0) {
        return
    }

    range = selection.getRangeAt(0)
        let containerElem = this.getSelectionContainerElem(range)
        if (!containerElem) return
        if (this.editor.editable && this.editor.$el.contains(containerElem)) {
            this._currentRange = range
        }
    }

    getCurrentRange (): Range {
        let selection = window.getSelection()
        if (selection.rangeCount === 0) return null
        return selection.getRangeAt(0)
    }

    selectNode (beginNode: Node, beginOffset: number, endNode: Node, endOffset: number) {
        let selection = window.getSelection()
        let range = document.createRange()
        range.setStart(beginNode, beginOffset)
        range.setEnd(endNode, endOffset)
        selection.removeAllRanges()
        selection.addRange(range)
        return range
    }

  /**
   * 获取选区范围内DOM元素
   * @param range 选区范围
   */
    getSelectionContainerElem (range) {
        let r = range || this._currentRange
        let elem = null
        if (r) {
            elem = r.commonAncestorContainer
            return elem.nodeType === 1 ? elem : elem.parentNode
        }
    }

  // 恢复选区
  restoreSelection () {
    const selection = window.getSelection()
    const r = this._currentRange
    if (selection && r) {
        selection.removeAllRanges()
        selection.addRange(r)
    }
  }
}

export default Selection