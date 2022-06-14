<template>
  <div id="app">
    <button
      id="prettier-id"
      class="prettier-class"
    >
      Click Here
    </button>
    <div class="item" />
    123
    <div id="a">
      {{ text }} <span>2</span>
    </div>
    <div>
      {{ text }}
    </div>
    <div id="prettier-id1" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: 1,
      array: [1, 1]
    };
  }
};
</script>
