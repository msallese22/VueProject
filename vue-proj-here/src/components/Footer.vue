<template>
<div class="footer fixed-bottom">
  <p>Created By: Michaela Sallese </p>
  <div id="year" class="ms-1">&#169; {{ date() }} </div>
</div>
</template>

<script>
export default {
  name: "Footer",

  methods: {
    date()//because it's a METHOD
    {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: #c11c84;
  color: ghostwhite;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>