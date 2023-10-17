<template>
  <div class="allcontats">
    <table>
      <tr class="column">
        <th id="contact">Контакт</th>
        <th id="A1">Телефон</th>
        <th id="A2">E-mail <span class="slash">/</span></th>
        <th class="dateTable colEnd">Создан</th>
      </tr>
      <tr class="contact" v-for="contact in contacts" :key="contact.id">
        <td>
          <router-link
            :to="'/contacts/' + contact.id"
            style="display: flex; align-items: center"
            class="nameText"
          >
            <div class="circle">
              <h1 class="logoContact">
                {{ Array.from(contact.username)[0] }}
              </h1>
            </div>
            <p style="margin: 0; word-break:break-all;" >{{ contact.username }}</p></router-link
          >
        </td>
        <td id="B1">
          <router-link :to="'/contacts/' + contact.id" class="phoneText">{{
            contact.phone
          }}</router-link>
        </td>
        <td id="B2">
          <router-link :to="'/contacts/' + contact.id" class="emailText">{{
            contact.email
          }}</router-link>
        </td>
        <td class="dateTable">
          <router-link :to="'/contacts/' + contact.id" class="regText">{{
            contact.registrationDate
          }}</router-link>
        </td>
      </tr>
    </table>
    <div class="message">
      <div class="save" v-if="message == 'save'">
        <img class="edit" src="../img/Edit.svg" alt="" />
        <p class="edit-message">Контакт успешно сохранен</p>
      </div>
      <div class="edited" v-if="message == 'edit'">
        <img class="edit" src="../img/Edit.svg" alt="" />
        <p class="edit-message">Контакт успешно изменен</p>
      </div>
      <div class="remove" v-if="message == 'remove'">
        <img class="edit" src="../img/Edit.svg" alt="" />
        <p class="edit-message">Контакт успешно удален</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContactsStore } from "../store";
import { ref, computed } from "vue";

const store = useContactsStore();

store.initContats(JSON.parse(localStorage.getItem("contacts")));
const contacts = computed(() => store.getContacts);

const message = ref(localStorage.getItem("message"));
ref(store.messageShow(message));
</script>

<style scoped lang="scss">


.dateTable{
  text-align: right;
}

.contact {
  border-bottom: 1px solid rgba(234, 242, 253, 1);
}
.message {
  position: absolute;
  bottom: 48px;
  left: 32px;
}
.save,
.edited,
.remove {
  background: rgba(255, 255, 255, 1);
  width: 256px;
  height: 56px;
  box-shadow: 0px 0px 16px 0px rgba(176, 197, 222, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 9px;
}
.edit {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}
.edit-message {
  padding-right: 12px;
}
</style>
