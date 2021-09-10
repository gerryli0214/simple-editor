<template>
  <div class="full">
    <div class="editor-container" ref="editor"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import SimpleEditor from '../../src/editor'

export default defineComponent({
  data () {
    return {
      a: 789,
      editorInstance: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.editorInstance = new SimpleEditor({
        el: this.$refs.editor
      })
    }
  }
})
</script>

<style lang='scss' scoped>
.editor-container{
  height: 600px;
}
</style>
