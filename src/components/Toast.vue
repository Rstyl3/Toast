<template>
  <transition-group name="toasts" tag="div" class="toasts-wrap">
    <ToastBlock class="toasts-item" v-for="toast in toasts" :toast="toast" :key="toast.id" @getRemoveToast="removeToast(toast.id)"></ToastBlock>
  </transition-group>
</template>

<script>
import ToastBlock from './ToastBlock.vue'

export default {
  name: 'Toast',
  components: {
    ToastBlock,
  },
  props: ['data'],
  data() {
    return {
      toasts: [],
      toastID: 0,
    }
  },
  watch: {
    data() {
      if (this.data.duration == null) {
        this.addNoDuration(this.data.type, this.data.text)
      } else {
        this.addToast(this.data.type, this.data.duration, this.data.text)
      }
    },
    toasts(v) {
      let empty = v.length
      if (empty == 0) {
        this.toastID = 0
      }
    },
  },
  methods: {
    addToast(type, duration, text) {
      const id = this.toastID++

      this.toasts.push({ id, type, text })

      setTimeout(() => {
        this.removeToast(id)
      }, duration)
    },
    //if No duration
    addNoDuration(type, text) {
      const id = this.toastID++
      this.toasts.push({ id, type, text })
    },

    removeToast(id) {
      this.toasts = this.toasts.filter(m => m.id !== id)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toasts-wrap {
  display: flex;
  bottom: 7%;
  position: fixed;
  flex-direction: column;
  transform: translateX(-50%);
  left: 50%;
  z-index: 9999;
}
// Toasts transition
.toasts-item,
.toasts-enter-active,
.toasts-leave-active {
  transition: all 0.3s ease;
}

.toasts-enter {
  opacity: 0;
  transform: translateY(20px);
}

.toasts-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
