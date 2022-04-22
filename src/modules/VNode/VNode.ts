import { isNode, isTextNode } from "../../utils/dom-utils"
import Position from "../position"
import VTextNode from "./VTextNode"

/**
 * @description 虚拟DOM节点
 */
class VNode {
  // 标签
  public tag: string
  // 节点类型
  public nodeType: number
  // 内容
  public textContent: string
  // 子节点
  public children: Array<VNode | VTextNode>
  // 父节点
  public parent: VNode = null
  // 起始坐标
  public start: number
  // 结束坐标
  public end: number
  // 真实节点，便于与选区关联
  public __node: Element

  constructor (node: Element, parent: VNode = null, position: Position) {
    this.tag = node.tagName.toLowerCase()
    this.nodeType = node.nodeType
    this.textContent = node.textContent
    this.parent = parent
    this.__node = node
    this.start = position.getEnd()
    this.children = this.getVNodeChildren(node, position)
    this.end = position.getEnd()
  }

  getVNodeChildren(node: Element, position: Position): VNode[] {
    if (isTextNode(node)) return null
    let children = []
    for (let i = 0; i < node.childNodes.length; i++) {
      let currentNode = node.childNodes[i]
      // @ts-ignore
      if (isNode(currentNode)) children.push(new VNode(currentNode, this, position))
      // @ts-ignore
      if (isTextNode(currentNode)) children.push(new VTextNode(currentNode, this, position))
    }
    return children
  }
}

export default VNode