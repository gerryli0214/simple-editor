/**
 * @description 虚拟DOM节点
 */
class VNode {
  private tag: string
  private nodeType: number
  private children: Array<VNode>

  constructor (node: HTMLElement) {
    this.init(node)
  }

  private init (node: HTMLElement) {

  }
}

export default VNode