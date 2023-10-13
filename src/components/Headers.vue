<template>
  <header>
    <select>
        <option>Все</option>
        <option>Коллеги</option>
        <option>Родственики</option>
    </select>
    <router-link to="/addcontacts"><a>Добавить контакт</a></router-link>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
