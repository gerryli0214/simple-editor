import { EditorInterface } from "../types/global"

/**
 * @description document指令相关
 */
class Command {
    private editor: EditorInterface
    private selection: any

    constructor(editor: EditorInterface) {
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