# vue-switch-lang
A small and easy to use component to switch between languages in a dropdown menu, created by Vue.js. 
<br/>

## Demo
https://aliafsah1988.github.io/vue-switch-lang/
<br/>

## How to use
1. Intall it with npm:
<br/>

```bash
npm i vue-switch-lang
```
2. You can use it:
<br/>
- Locally:
<br/>
In your parent component:
<br/>

```vue
<template>
  <div class="home">
    <SwitchLang @changed="onChange" :initLang="initLang" :options="options" />
  </div>
</template>

<script>
import SwitchLang from "vue-switch-lang";

export default {
  components: {
    SwitchLang
  },
  methods: {
    onChange(lang) {
      // Do something
    }
  },
  data() {
    return {
      initLang: {
        title: "en",
        flag: "gb"
      },
      options: [
        {
          title: "en",
          flag: "gb"
        },
        {
          title: "de",
          flag: "de"
        },
        {
          title: "fa",
          flag: "ir"
        }
      ]
    };
  }
};
</script>

<style>
.multiselect__option--selected {
  background-color: red;
}

.multiselect__option--highlight {
  background-color: green;
  background: green;
}
</style>
```
- Gobally:
<br/>
In the file that you instantiate Vue (usually main.js):

```vue
import Vue from "vue";
import App from "./App.vue";
import SwitchLang from "vue-switch-lang";

Vue.component("SwitchLang");

new Vue({
  render: h => h(App)
}).$mount("#app");
```

## For running the whole project in dev mode
1) Go to the root of application and install packages with:
```bash
npm install
```
2) Then run the application with
```bash
npm run serve
```
3) If you want to build it:
```bash
npm run build
```

## Dependencies
- vue.js            https://github.com/vuejs/vue
- vue-multiselect   https://github.com/shentao/vue-multiselect
- vue-country-flag  https://github.com/P3trur0/vue-country-flag


## Related Projects
If you need a sample to create a multi language SPA with Vue.js with ability to change between
right-to-left and left-to-right, please visit:
<br />
https://github.com/aliafsah1988/vue-multilang-sample