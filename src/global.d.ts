declare interface EditorInterface {
  selection: any;
  editable: Boolean
  $el: HTMLElement

  getContent(): string
  setContent(content: string): void
}