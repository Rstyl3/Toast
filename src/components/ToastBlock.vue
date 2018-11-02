<template>
    <div :class="['toast-block', 'toast-type-' + toast.type]">
        <ul class="toast-list" v-if="typeof toast.text === 'object'">
            <li v-for="msg in toast.text" :key="msg.id">{{ msg }}</li>
        </ul>
        <span v-else class="toast-text">{{ toast.text }}</span>
        <font-awesome-icon class="btn-close" icon="window-close" @click="hdlClose">close</font-awesome-icon>
    </div>
</template>

<script>
export default {
  name: 'ToastBlock',
  props: {
    toast: {
      type: Object,
      required: true,
    },
  },
  methods: {
    hdlClose(e) {
      this.$emit('getRemoveToast', e)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.toast-block {
  display: flex;
//   align-items: center;
  width: 100%;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 5px;
  align-self: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
}
.btn-close {
  font-size: 25px;
  margin-left: auto;
  margin-bottom: auto;
  cursor: pointer;
}
.toast-text {
  font-size: 14px;
  line-height: 1.5;
}
.toast-list {
  padding: 0 10px 0 30px;
  text-align: left;
}
.toast-list li {
  padding: 2px 0 2px 0;
}
.toast-type-success {
  background-color: $color-success;
}
.toast-type-error {
  background-color: $color-error;
}
.toast-type-warning {
  background-color: $color-warning;
}
.toast-type-info {
  background-color: $color-info;
}
</style>
