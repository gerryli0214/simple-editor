import EventEmitter from "./utils/event-emitter"
import MenuBar from "./modules/menubar"
import Selection from "./modules/selection"
import Command from "./modules/command"
import './styles/app.css'
import { editorOptions, EditorPlugin } from "./types/global"
import Observer from "./modules/observer"
import VNode from "./modules/VNode/VNode"
import Position from "./modules/position"

class Editor extends EventEmitter{
  // 编辑器配置项
  private options: editorOptions
  private command
  private _doc: VNode
  public selection
  // 是否可编辑
  public editable: Boolean
  // 根元素
  public $el: HTMLElement
  // 容器
  public $container: HTMLElement
  // 菜单栏容器
  public $menuBar: any
  // 监听器
  public observer: Observer
  // 菜单数据对象
  public menu: MenuBar
  // 编辑器插件
  public plugins: Map<string, EditorPlugin> = new Map()
  // 计算元素位置信息
  public position: Position

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
      this.observer = new Observer(this.$container)
      this.position = new Position()
      this._doc = new VNode(this.$container, null, this.position)
    }

    private initEvent () {
      let pasteFun = this.options.pasteHandler || this.handlePasteEvent
      this.$el.addEventListener('paste', pasteFun.bind(this))

      this.observer.on('change', this.handleContentChange.bind(this))
    }

    private handleContentChange () {
      this.position.init()
      let currentVNode: VNode = new VNode(this.$container, null, this.position)
      console.log(currentVNode)
    }

    private handlePasteEvent (e) {
      e.preventDefault()
      let data = e.clipboardData.getData('text/plain')
      let result = data.split('/n').join('<br />')
      this.command.doCmd('insertHTML', result)
    }
    // 获取编辑器内容
    public getContent () {
      return this.$container.innerHTML
    }
    // 设置编辑器内容
    public setContent (html) {
      this.$container.innerHTML = html
    }
    // 注册插件
    public register (plugin: EditorPlugin) {
      if (this.plugins.has(plugin.NAME)) return
      this.plugins.set(plugin.NAME, plugin)
    }
}

export default Editor
