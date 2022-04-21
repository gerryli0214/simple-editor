import Position from "../position"
import VNode from "./VNode"

/**
 * @description 文本节点描述
 */
class VTextNode {
  // 节点类型
  public nodeType: number
  // 节点名称
  public nodeName: string
  // 父节点
  public parent: VNode = null
  // 文本内容
  public textContent: string
  // 节点起始坐标
  public start: number
  // 节点结束坐标
  public end: number

  constructor (node: Text, parent: VNode = null, position: Position) {
    this.nodeType = node.nodeType
    this.nodeName = node.nodeName
    this.parent = parent
    this.textContent = node.nodeValue
    let [ start, end ] = position.getNodePosition(this)
    this.start = start
    this.end = end
  }
}

export default VTextNode