# Simple Toast Notification
Integrated my own toast to work with fontawesome and use it as a vue plugin

## Installing fontawesome
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/vue-fontawesome
```

### Usage
<code>src/main.js</code>
```javascript
import Vue from 'vue'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```

### Compiles and minifies for production
```
npm run build
npx vue-cli-service build --modern
```
## How to build a simple plugin:
Nice tutorial here: https://dev.to/nkoik/writing-a-very-simple-plugin-in-vuejs---example-8g8  
Docs in vue: https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin

## Installing SASS globally
```npm
npm install --save-dev node-sass sass-loader
```
Include this code :  
<code>vue.config.js</code>
```javascript
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
};
```
article is here: https://vueschool.io/articles/vuejs-tutorials/globally-load-sass-into-your-vue-js-applications/

This is how you use it:
```html
<style lang="scss" scoped>
```