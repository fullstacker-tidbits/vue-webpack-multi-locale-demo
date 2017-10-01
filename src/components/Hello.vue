<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>{{ caption }}</h2>
    <ul>
      <li v-for="(t, i) in todos" :key="i">{{ t }}</li>
    </ul>
  </div>
</template>

<script>
import T from '../locales';
import services from '../services';

export default {
  name: 'hello',

  data() {
    return {
      todos: [],
      title: T('title'),
    };
  },

  computed: {
    caption() {
      return T('caption', this.todos.length);
    },
  },

  async created() {
    this.todos = await services.todoList();
  },
};
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  text-align: left;
  max-width: 500px;
  margin: 10px auto;
}
</style>
