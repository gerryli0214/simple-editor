import EditorMenu from "./editor-menu"
import EventEmiter from "./utils/event-emiter"

export interface editorOptions {
  el: string | Element,
  width?: string,
  height?: string
}

class Editor extends EventEmiter{
  private options: editorOptions
  private readonly editorMenu

  constructor (options: editorOptions) {
    super()
    this.options = options
    this.editorMenu = new EditorMenu()
  }
}

export default Editor
