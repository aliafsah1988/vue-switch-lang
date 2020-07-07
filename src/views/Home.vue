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
          title: "fa",
          flag: "ir"
        },
        {
          title: "de",
          flag: "de"
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
</style>
