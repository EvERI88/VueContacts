<template>
  <div class="contact">
    <div class="vl" v-if="isLoggedIn">
      <div class="form">
        <h1 class="primary">Контакт</h1>
        <div class="item-colum">
          <form style="width: 100%" @submit.prevent="submitForm">
            <div class="item">
              <div class="item-data">
                <h3>Имя</h3>
                <input type="text" v-model="newContact.username" />
              </div>
              <div
                class="item-error"
                v-for="error in v$.username.$errors"
                :key="error.$uid"
              >
                <p v-if="error.$message == 'Value is required'">
                  Поле не может быть пустым
                </p>
                <p
                  v-if="
                    error.$message ==
                    'This field should be at least 5 characters long'
                  "
                >
                  Короткое имя
                </p>
                <p v-if="error.$message == 'The maximum length allowed is 14'">
                  Длинное имя
                </p>
              </div>
            </div>
            <div class="item">
              <div class="item-data">
                <h3>Телефон</h3>
                <input
                  type=""
                  v-mask="['+7(###)-###-##-##']"
                  v-model="newContact.phone"
                  placeholder="+7(___)-___-__-__"
                />
              </div>
              <div
                class="item-error"
                v-for="error in v$.phone.$errors"
                :key="error.$uid"
              >
                <p v-if="error.$message == 'Value is required'">
                  Поле не может быть пустым
                </p>
                <p
                  v-if="
                    error.$message ==
                    'This field should be at least 17 characters long'
                  "
                >
                  Некорректный номер
                </p>
              </div>
            </div>
            <div class="item">
              <div class="item-data">
                <h3>E-mail</h3>
                <input v-model="newContact.email" />
              </div>
              <div
                class="item-error"
                v-for="error in v$.email.$errors"
                :key="error.$uid"
              >
                <p
                  v-if="error.$message == 'Value is required'"
                  class="text-error"
                >
                  Поле не может быть пустым
                </p>
                <p
                  v-if="error.$message == 'Value is not a valid email address'"
                  class="text-error"
                >
                  Введите email
                </p>
              </div>
            </div>
            <div class="item">
              <div class="item-data">
                <h3>Категория</h3>
                <select
                  name="catefory"
                  class="editCategory"
                  v-model="newContact.category"
                >
                  <option value="Колеги">Колеги</option>
                  <option value="Родственики">Родственики</option>
                  <option value="Все">Все</option>
                </select>
              </div>
              <div
                class="item-error"
                v-for="error in v$.category.$errors"
                :key="error.$uid"
              >
                <p v-if="error.$message == 'Value is required'">
                  Поле не должно быть пусытм
                </p>
              </div>
            </div>
            <div class="block-button">
              <!-- <button class="submit" type="submit" @click="store.editContact(newContact())"> -->
              <button
                class="submit"
                :class="result ? 'loading' : 'is-outlined'"
              >
                <img
                  v-if="result"
                  class="img-load rot"
                  src="../img/IsLogin.svg"
                  alt=""
                />
                Сохранить
              </button>
              <router-link to="/">
                <button class="delete" @click="removeContact(newContact.id)">
                  Удалить контакт
                </button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useContactsStore } from "../store";
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const store = useContactsStore();
const { isLoggedIn } = storeToRefs(store);

const contact = ref(store.getContactById(route.params.idContact));

store.initContats(JSON.parse(localStorage.getItem("contacts")));

const newContact = reactive({
  id: contact.value[0].id,
  username: contact.value[0].username,
  phone: contact.value[0].phone,
  email: contact.value[0].email,
  category: contact.value[0].category,
  registrationDate: contact.value[0].registrationDate,
});

const rules = {
  username: { required, minLength: minLength(3), maxLength: maxLength(14) },
  phone: { required, minLength: minLength(17) },
  email: { required, email },
  category: { required },
};

const v$ = useVuelidate(rules, newContact);
const result = ref(false);

const submitForm = async () => {
  const valid = await v$.value.$validate();
  if (valid) {
    result.value = true;
    new Promise((r) => setTimeout(r, 2000)).then(() => {
      store.editContact(newContact);
      router.push("/");
    });
  }
};
const removeContact = async (newContact) => {
  store.removeContact(newContact);
  router.push("/");
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
