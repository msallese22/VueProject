<template>
  <div>
    <NavBar/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
  <Footer/>
</template>

<script>

import {defineComponent} from "vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import GuessingGame from "@/components/GuessingGame.vue";
import About from "@/components/About.vue"

export default defineComponent(
    {
      components:
          {
            Footer,
            NavBar,
            About,
            GuessingGame
          }
    });
</script>

<style scoped>
header
{
  line-height: 1.5;
}

.logo
{
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px)
{
  header
  {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo
  {
    margin: 0 2rem 0 0;
  }

  header .wrapper
  {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
