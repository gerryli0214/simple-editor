/**
 * @description 核心DOM操作类
 */

export function isTextNode (node: Node) {
  return node.nodeType === 5
}

export function isNode (node: Node) {
  return node.nodeType === 1
}
