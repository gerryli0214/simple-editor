import VNode from "../VNode/VNode"
import VTextNode from "../VNode/VTextNode"

/**
 * @description 重写选区数据对象
 */
class SelectionRange {
  // 真实的页面选区
  private _currentRange: Range
  // 开始的虚拟节点
  private beginVNode: VNode | VTextNode
  // 结束的虚拟节点
  private endVNode: VNode | VTextNode

  constructor (range: Range, vNode: VNode) {
    this._currentRange = range
    this.init(vNode)
  }

  public init (vNode) {
    // 深度优先元素遍历，找出选区起点、结束点
    let currentNode = vNode
    while (currentNode) {
      
    }
  }
}

export default SelectionRange