// import Vue from "vue";
import { mount } from "@vue/test-utils";
import SwitchLang from "@/components/SwitchLang";

describe("SwitchLang.vue", () => {
  const options = [
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
  ];

  it("renders initLang when passed gb", async () => {
    const initLang = {
      title: "en",
      flag: "gb"
    };

    const wrapper = mount(SwitchLang, {
      propsData: { initLang, options }
    });

    const flag = wrapper
      .find(".multiselect")
      .find(".multiselect__tags")
      .find(".multiselect__single")
      .find(".f-gb");

    expect(flag.exists()).toBe(true);
  });

  it("renders initLang when passed de", async () => {
    const initLang = {
      title: "de",
      flag: "de"
    };

    const wrapper = mount(SwitchLang, {
      propsData: { initLang, options }
    });

    const flag = wrapper
      .find(".multiselect")
      .find(".multiselect__tags")
      .find(".multiselect__single")
      .find(".f-de");

    expect(flag.exists()).toBe(true);
  });

  it("renders options when passed", async () => {
    const initLang = {
      title: "de",
      flag: "de"
    };

    const wrapper = mount(SwitchLang, {
      propsData: { initLang, options }
    });

    const flagGb = wrapper
      .find(".multiselect")
      .find(".multiselect__content-wrapper")
      .find(".multiselect__content")
      .find(".multiselect__element")
      .find(".multiselect__option")
      .find("div")
      .find(".f-gb");

    const flagDe = wrapper
      .find(".multiselect")
      .find(".multiselect__content-wrapper")
      .find(".multiselect__content")
      .findAll(".multiselect__element")
      .at(1)
      .find(".multiselect__option")
      .find("div")
      .find(".f-de");

    const flagIr = wrapper
      .find(".multiselect")
      .find(".multiselect__content-wrapper")
      .find(".multiselect__content")
      .findAll(".multiselect__element")
      .at(2)
      .find(".multiselect__option")
      .find("div")
      .find(".f-ir");

    expect(flagGb.exists()).toBe(true);
    expect(flagDe.exists()).toBe(true);
    expect(flagIr.exists()).toBe(true);
  });

  it("renders List Empty when nothing passed", async () => {
    const wrapper = mount(SwitchLang);

    const labelMessage = wrapper
      .find(".multiselect")
      .find(".multiselect__content-wrapper")
      .find(".multiselect__content")
      .findAll("li")
      .at(1)
      .find(".multiselect__option");

    expect(labelMessage.exists()).toBe(true);
    expect(labelMessage.text()).toBe(
      "No elements found. Consider changing the search query."
    );

    const labelListEmpty = wrapper
      .find(".multiselect")
      .find(".multiselect__content-wrapper")
      .find(".multiselect__content")
      .findAll("li")
      .at(2)
      .find(".multiselect__option");

    expect(labelListEmpty.exists()).toBe(true);
    expect(labelListEmpty.text()).toBe("List is empty.");
  });
});
