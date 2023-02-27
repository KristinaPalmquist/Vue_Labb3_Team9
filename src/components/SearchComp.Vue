<script setup></script>

<template>
  <div class="search-container">
    <div class="search-div">
    <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Filmer och Biografer" aria-label="Search" aria-describedby="search-addon" @keydown.enter="onClick"/>
  <span class="input-group-text border-0" id="search-addon" @click="onClick">
    <img src="../assets/img/search.png" id="search-icon">
  </span>
</div>
</div>
</div>
</template>

<style scoped>
#search-icon {
  height: 25px;
}

</style>
