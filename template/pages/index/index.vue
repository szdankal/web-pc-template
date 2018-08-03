<template>
  <div>
    index{{ num }}
    <button @click="add">+</button>
  </div>
</template>
<script>


export default{
  data() {
    return {}
  },
  mounted() {
  },
  computed: {
    num() {
      return this.$store.state.cart.num
    },
  },
  methods: {
    add() {
      this.$store.dispatch('asyncAdd', 1)
    },
  },
}
</script>

<style>

</style>
