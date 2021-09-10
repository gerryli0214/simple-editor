// 声明全局类型
declare type HTMLNode = HTMLElement | Node
declare type HTMLNodeList = HTMLCollection | NodeList

declare interface EditorInterface {
  selection: any
  editable: Boolean
  $el: HTMLNode

  getContent(): string
  setContent(content: string): void
}