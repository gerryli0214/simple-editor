import EventEmiter from "./utils/event-emiter"
import MenuBar from "./modules/menubar"
import Selection from "./modules/selection"
import Command from "./modules/command"
import './styles/app.css'

export interface editorOptions {
  el: HTMLElement,
  width?: string,
  height?: string,
  pasteHandler?: Function
}

class Editor extends EventEmiter implements EditorInterface{
  // 编辑器配置项
  private options: editorOptions
  // 编辑器操作栏
  private $menuBar
  private command
  public selection
  private menu
  // 是否可编辑
  public editable: Boolean
  public $el: HTMLElement
  public $container: HTMLElement

  constructor ( options: editorOptions) {
    super()
    this.$el = options.el
    this.options = options
    this.initEditor()
    this.initEvent()
  }

  initEditor () {
    this.editable = true

    let html = `
        <div class="fly-editor">
            <div class="fly-editor-menubar"></div>
            <div class="fly-editor-content" contenteditable="true"></div>
        </div>
      `
      this.$el.innerHTML = html
      this.$container = this.$el.querySelector('.fly-editor-content')
      this.$menuBar = this.$el.querySelector('.fly-editor-menubar')
      this.selection = new Selection(this)
      this.command = new Command(this)
      this.menu = new MenuBar(this)
    }

    private initEvent () {
        let pasteFun = this.options.pasteHandler || this.handlePasteEvent
        this.$el.addEventListener('paste', pasteFun.bind(this))
    }

    private handlePasteEvent (e) {
        e.preventDefault()
        let data = e.clipboardData.getData('text/plain')
        let result = data.split('/n').join('<br />')
        this.command.doCmd('insertHTML', result)
    }

    public getContent () {
        return this.$container.innerHTML
    }

    public setContent (html) {
        this.$container.innerHTML = html
    }
}

export default Editor
