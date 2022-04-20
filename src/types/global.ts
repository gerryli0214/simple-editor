// 类型别名
export declare type HTMLNode = HTMLElement | Node | null
export declare type HTMLNodeList = HTMLCollection | NodeList

export interface EditorInterface {
  selection: any
  editable: Boolean
  $el: HTMLNode
  $container: HTMLNode
  plugins: Object

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

export interface EventEmitterInterface {
  once (event: string, fn: Function): void
  on (event: string, fn: Function): void
  off (event, fn: Function): void
  emit (event: string): void
}
// 编辑器插件
export interface EditorPlugin {
  readonly NAME: string
}

export interface PopMenuImpl {
  readonly editor: EditorInterface
}