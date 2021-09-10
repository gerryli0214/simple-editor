// 类型别名
declare type HTMLNode = HTMLElement | Node | null
declare type HTMLNodeList = HTMLCollection | NodeList

export declare interface EditorInterface {
  selection: any
  editable: Boolean
  $el: HTMLNode

  getContent(): string
  setContent(content: string): void
}