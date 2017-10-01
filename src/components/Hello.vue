<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is a demo</h2>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue App',
    };
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
