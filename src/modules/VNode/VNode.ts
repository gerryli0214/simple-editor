import { isNode, isTextNode } from "../../utils/dom-utils"

/**
 * @description 虚拟DOM节点
 */
class VNode {
  // 标签
  private tag: string
  // 节点类型
  private nodeType: number
  // 内容
  private textContent: string
  // 子节点
  private children: Array<VNode>

  constructor (node: HTMLElement) {
    this.tag = node.tagName
    this.nodeType = node.nodeType
    this.textContent = node.textContent
    this.children = this.getVNodeChildren(node)
  }

  getVNodeChildren(node: HTMLElement): VNode[] {
    if (isTextNode(node)) return null
    let children = []
    for (let i = 0; i < node.childNodes.length; i++) {
      let currentNode = node.childNodes[i]
      // @ts-ignore
      if (isNode(currentNode)) children.push(new VNode(currentNode))
      if (isTextNode(currentNode)) children.push()
    }
    return children
  }
}

export default VNode