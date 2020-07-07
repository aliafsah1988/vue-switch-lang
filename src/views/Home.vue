<template>
  <div class="home">
    <SwitchLang @changed="onChange" :initLang="initLang" :options="options" />
  </div>
</template>

<script>
import SwitchLang from "@/components/SwitchLang";

export default {
  name: "App",
  components: {
    SwitchLang
  },
  methods: {
    onChange(lang) {
      alert(`Selected language is: ${lang.title}`);
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
.home {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.vue-switch-lang {
  width: 30%;
}

.multiselect__option--selected {
  background-color: red;
}

.multiselect__option--highlight {
  background-color: green;
  background: green;
}
</style>
