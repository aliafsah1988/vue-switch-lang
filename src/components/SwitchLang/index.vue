<template>
  <multiselect
    v-model="selected"
    class="select-lang-container"
    :options="options"
    :multiple="false"
    :searchable="false"
    :show-labels="false"
    @select="onSelect"
  >
    <div slot="singleLabel" slot-scope="props">
      <country-flag :country="props.option.flag" />
    </div>
    <div slot="option" slot-scope="props">
      <country-flag :country="props.option.flag" />
    </div>
  </multiselect>
</template>

<script>
import Multiselect from "vue-multiselect";
import CountryFlag from "vue-country-flag";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  components: {
    Multiselect,
    CountryFlag
  },
  props: {
    initLang: {
      type: Object,
      default() {
        return {
          title: "en",
          flag: "gb"
        };
      }
    },
    options: {
      type: Array,
      default() {
        return [
          {
            title: "en",
            flag: "gb"
          }
        ];
      }
    }
  },
  mounted() {
    this.selected = this.initLang;
  },
  methods: {
    onSelect(lang) {
      this.$emit("changed", lang.title);
    }
  },
  data() {
    return {
      selected: null
    };
  }
};
</script>

<style>
@import url("./style.css");
</style>
