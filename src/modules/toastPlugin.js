import Toast from '../components/Toast.vue'

// This exports the plugin object.
export default {
    // The install method will be called with the Vue constructor as
    // the first argument, along with possible options
    install (Vue, options) {
        // Add a component or directive to your plugin, so it will be installed globally to your project.
        Vue.component('Toast', Toast)
        // Add Vue instance methods by attaching them to Vue.prototype.
        Vue.prototype.$success_message = function(msg){
            this.data = {
              type: 'success',
              duration: 5000,
              text: msg,
            }
          } 
          Vue.prototype.$error_message = function(msg){
            this.data = {
              type: 'error',
              duration: 5000,
              text: msg,
            }
          } 
          Vue.prototype.$warning_message = function(msg){
            this.data = {
              type: 'warning',
              duration: 5000,
              text: msg,
            }
          } 
          Vue.prototype.$info_message = function(msg){
            this.data = {
              type: 'info',
              duration: 5000,
              text: msg,
            }
          } 
    }
  }