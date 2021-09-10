import '../styles/fonts/iconfont.css'

const ICON_MAP = {
    'undo': {
        icon: 'richlujing',
        title: '撤销',
        fun: 'handleUndo'
    },
    'redo': {
        icon: 'richredo',
        title: '回退',
        fun: 'handleRedo'
    },
    'B': {
        icon: 'richjiacu',
        title: '加粗',
        fun: 'handleFontBold'
    },
    'U': {
        icon: 'richUnderline',
        title: '下划线',
        fun: 'handleUnderline'
    },
    'I': {
        icon: 'richxieti',
        title: '斜体',
        fun: 'handleFontItalic'
    }
}

class MenuBar {
    private editor: EditorInterface
    private selection
    private command
    private $el: HTMLElement

    constructor(editor) {
        this.editor = editor
        this.selection = editor.selection
        this.command = editor.command
        this.$el = editor.$menuBar
        this.init()
        return this
    }

    init () {
        Object.keys(ICON_MAP).forEach(vv => {
            let icon = document.createElement('i')
            icon.classList.add('rich')
            icon.classList.add(ICON_MAP[vv].icon)
            icon.classList.add('base-icon')
            icon.setAttribute('title', ICON_MAP[vv].title)
            this.$el.appendChild(icon)
            icon.addEventListener('click', this[ICON_MAP[vv].fun].bind(this))
        })

        this.$el.addEventListener('mousedown', this.saveRange.bind(this))
    }

    saveRange () {
        this.selection.saveRange()
    }

    handleFontBold () {
        this.command.doCmd('bold')
    }

    handleUnderline () {
        this.command.doCmd('underline')
    }

    handleFontItalic () {
        this.command.doCmd('italic')
    }
    // 撤销
    handleUndo () {
        this.command.doCmd('undo')
    }
    // 回退
    handleRedo () {
        this.command.doCmd('redo')
    }

}

export default MenuBar