<template>
  <nav class="navbar navbar-expand-lg navbar-background">
    <router-link class="navbar-brand" to="/About">&#127800 Welcome!</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/About">About &#128125<span class="sr-only"></span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/GuessingGame">Guessing Game &#128175</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default{
  name: "NavBar"
}

</script>

<style scoped>

.navbar-background
{
  background-color: #ffd1f2;
}

</style>