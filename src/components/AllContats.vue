<template>
  <div class="allcontats">
    <table>
      <tr>
        <th>Контакт</th>
        <th>Телефон</th>
        <th>Почта</th>
        <th>Создание</th>
      </tr>
      <tr v-for="contact in store.getContacts" :key="contact.id" @click="store.openContact(contact)">
        <td>{{ contact.name }}</td>
        <td>{{ contact.phone }}</td>
        <td>{{ contact.email }}</td>
        <td>{{ contact.registrationDate }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useContactsStore } from "../store";
const store = useContactsStore();

let contacts = localStorage.getItem("contacts");
store.showLocal(contacts)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
