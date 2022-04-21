/**
 * @description 核心DOM操作类
 */

import { BLOCK_ELEMENT } from "../enums/element"
import VNode from "../modules/VNode/VNode"

export function isTextNode (node: Node): boolean {
  return node.nodeType === 3
}

export function isNode (node: Node): boolean {
  return node.nodeType === 1
}

export function isBlockElement (node: VNode): boolean {
  return BLOCK_ELEMENT[node.tag] !== undefined
}
