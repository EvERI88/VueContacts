<template>
  <header>
    <router-link to="/" v-if="route.fullPath == '/'">
      <div class="logo">
        <img src="../img/Logo.svg" alt="" />
        <h1>книга контактов</h1>
      </div>
    </router-link>

    <div class="logo center" v-if="route.fullPath == '/addcontacts'">
      <img
        style="width: 20px; height: 20px"
        src="../img/AddContact.svg"
        alt=""
      />
      <h1 class="h1">Добавить контакт</h1>
      <router-link to="/" class="close">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.05703 1.05752C1.57773 0.536817 2.42195 0.536817 2.94265 1.05752L9.99984 8.11471L17.057 1.05752C17.5777 0.536817 18.4219 0.536817 18.9426 1.05752C19.4633 1.57822 19.4633 2.42244 18.9426 2.94313L11.8855 10.0003L18.9426 17.0575C19.4633 17.5782 19.4633 18.4224 18.9426 18.9431C18.4219 19.4638 17.5777 19.4638 17.057 18.9431L9.99984 11.8859L2.94265 18.9431C2.42195 19.4638 1.57773 19.4638 1.05703 18.9431C0.536329 18.4224 0.536329 17.5782 1.05703 17.0575L8.11422 10.0003L1.05703 2.94313C0.536329 2.42244 0.536329 1.57822 1.05703 1.05752Z"
            fill="#939393"
          />
        </svg>
      </router-link>
    </div>

    <div class="logo center" v-if="route.name == 'contact'">
      <div class="circleLogo">
        <h1 class="logoContact">
          {{ Array.from(contact[0].username)[0] }}
        </h1>
      </div>
      <h1 class="h1">{{ contact[0].username }}</h1>
      <router-link to="/" class="close">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.05703 1.05752C1.57773 0.536817 2.42195 0.536817 2.94265 1.05752L9.99984 8.11471L17.057 1.05752C17.5777 0.536817 18.4219 0.536817 18.9426 1.05752C19.4633 1.57822 19.4633 2.42244 18.9426 2.94313L11.8855 10.0003L18.9426 17.0575C19.4633 17.5782 19.4633 18.4224 18.9426 18.9431C18.4219 19.4638 17.5777 19.4638 17.057 18.9431L9.99984 11.8859L2.94265 18.9431C2.42195 19.4638 1.57773 19.4638 1.05703 18.9431C0.536329 18.4224 0.536329 17.5782 1.05703 17.0575L8.11422 10.0003L1.05703 2.94313C0.536329 2.42244 0.536329 1.57822 1.05703 1.05752Z"
            fill="#939393"
          />
        </svg>
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { useContactsStore } from "../store";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
const store = useContactsStore();
const route = useRoute();
// const contact = ref(store.getContactById(route.params.idContact));
const contact = computed(() => store.getContactById(route.params.idContact));
// const contact = ref(store.getContactById(route.params.idContact));
</script>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  background-color: rgba(40, 40, 40, 1);
}
.close {
  position: absolute;
  right: 39px;
  height: 20px;
}
.center {
  justify-content: center;
  height: 48px;
}
h1 {
  text-transform: uppercase;
  margin: 0;
  color: rgba(224, 224, 224, 1);
}
.h1 {
  font-size: 20px;
  text-transform: none;
}
img {
  width: 42px;
  height: 32px;
  margin: 8px 16px 8px 48px;
}

</style>
