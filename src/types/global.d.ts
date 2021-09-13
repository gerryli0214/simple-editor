// 类型别名
export declare type HTMLNode = HTMLElement | Node | null
export declare type HTMLNodeList = HTMLCollection | NodeList

export declare interface EditorInterface {
  selection: any
  editable: Boolean
  $el: HTMLNode

  getContent(): string
  setContent(content: string): void
}

export interface editorOptions {
  el: HTMLElement,
  width?: string,
  height?: string,
  pasteHandler?: Function
}

export interface EventMap {
  type: string,
  callback: Array<Function>
}

export interface EventEmiterInterface {
  once (event: string, fn: Function): void
  on (event: string, fn: Function): void
  off (event, fn: Function): void
  emit (event: string): void
}