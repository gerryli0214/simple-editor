import VNode from "./VNode/VNode"
import VTextNode from "./VNode/VTextNode"

/**
 * @description DOM位置描述
 */
class Position {
  // 初始位置
  private start: number = 0
  // 结束位置
  private end: number = 0
  // 初始化位置信息
  public init () {
    this.start = 0
    this.end = 0
  }
  /**
   * @description 计算每个节点所在的位置信息
   * 1. 块级元素，默认占用一个字符
   * 2. 行内元素，默认不占用字符
   * @param node
   */
  public getNodePosition (node: VNode | VTextNode): number[] {
    let position = []
    position[0] = this.end
    position[1] = this.end + node.textContent.length
    this.end = position[1]
    return position
  }
  /**
   * @description 块级元素，中间会有换行符
   */
  public setBlockElement (): void {
    this.end++
  }

  public getEnd (): number {
    return this.end
  }
}

export default Position