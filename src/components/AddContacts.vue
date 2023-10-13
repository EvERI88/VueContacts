<template>
  <form class="addcontacts" submit>
    <input type="text" placeholder="Имя" v-model="name" />
    <input id="phone" type="text" v-model="phone" v-mask="['+7(###)-###-##-##']"/>
    <input type="email" placeholder="Почта" v-model="mail" />
    <button @click.prevent="store.addContact(newContact)">Добавить контакт</button>
  </form>
</template>

<script setup>
import { useContactsStore } from "../store";
import { ref } from "vue";

const store = useContactsStore();
const name = ref(),
  phone = ref(),
  mail = ref();

const newContact = {
  id: Date.now(),
  name: ref(name),
  phone: ref(phone),
  email: ref(mail),
  registrationDate: new Date().toDateString(),
};
</script>

<style scoped lang="scss"></style>
