import Editor from "../editor"

/**
 * @description document指令相关
 */
class Command {
    private editor: Editor
    private selection: any

    constructor(editor: Editor) {
        this.editor = editor
        this.selection = editor.selection
        this.doCmd('styleWithCSS', true)
    }

    doCmd(cmd, value) {
        this.selection.restoreSelection()
        document.execCommand(cmd, null, value)
        this.selection.saveRange()
    }

    queryCmdState (cmd) {
        return document.queryCommandState(cmd)
    }
}

export default Command