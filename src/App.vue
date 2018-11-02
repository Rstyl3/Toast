<template>
  <div id="app">
    <button @click="hdlSuccess">Send Success</button>
    <button @click="hdlError">Send Error</button>
    <button @click="hdlWarning">Send Warning</button>
    <button @click="hdlInfo">Send Info</button>
    <toast :data="data" />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      data: [],
    }
  },
  methods: {
    hdlSuccess() {
      this.$success_message('Success!!!')
    },
    hdlError() {
      let obj = {
        Url: 'The Url field is required., Please enter valid https:// url',
        Company: 'The Company field is required.',
        Location: 'The Location field is required.',
        Password: 'The Password field is required.',
        UserName: 'The UserName field is required.',
        CustomerName: 'The CustomerName field is required.',
      }
      this.$error_message(obj)
    },
    hdlWarning() {
      this.$warning_message('Warning!!!')
    },
    hdlInfo() {
      this.$info_message('Processing!!!')
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
