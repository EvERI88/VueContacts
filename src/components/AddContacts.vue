<template>
  <form class="addcontacts form" @submit.prevent="submitForm">
    <h1 class="primary">Новый контакт</h1>
    <div class="item-colum">
      <div class="item">
        <div class="item-data">
          <h3>Имя</h3>
          <input
            :class="v$.username.$error ? 'error' : ''"
            type="text"
            placeholder="Имя"
            v-model="newContact.username"
          />
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
          <p
            v-if="
              error.$message ==
              'The maximum length allowed is 14'
            "
          >
            Длинное имя
          </p>
        </div>
      </div>
      <div class="item">
        <div class="item-data">
          <h3>Телефон</h3>
          <input
            :class="v$.phone.$error ? 'error' : ''"
            id="phone"
            type="text"
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
          <input
            :class="v$.email.$error ? 'error' : ''"
            placeholder="Почта"
            v-model="newContact.email"
          />
        </div>
        <div
          class="item-error"
          v-for="error in v$.email.$errors"
          :key="error.$uid"
        >
          <p v-if="error.$message == 'Value is required'" class="text-error">
            Поле не может быть пустым
          </p>
          <p
            v-if="error.$message == 'Value is not a valid email address'"
            class="text-error"
          >
            Введите email
          </p>
          <p v-if="error.$message == 'Value is length'" class="text-error">
            Слишком которткое имя
          </p>
        </div>
      </div>
      <div class="item">
        <div class="item-data">
          <h3>Категория</h3>
          <select
            :class="v$.category.$error ? 'error' : ''"
            name="catefory"
            class="editCategory"
            v-model="newContact.category"
            id="select"
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
          <p v-if="error.$message == 'Value is required'" class="text-error">
            Поле не может быть пустым
          </p>
        </div>
      </div>
    </div>

    <div class="block-button">
      <button class="submit" :class="result ? 'loading' : 'is-outlined'">
        <img
          v-if="result"
          class="img-load rot"
          src="../img/IsLogin.svg"
          alt=""
        />
        Сохранить
      </button>
    </div>
  </form>
</template>

<script setup>
import { useContactsStore } from "../store";
import { ref, reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useContactsStore();
store.initContats(JSON.parse(localStorage.getItem("contacts")));

const currentDate = new Date();
const newContact = reactive({
  id: Date.now(),
  username: "",
  phone: "",
  email: "",
  category: "",
  registrationDate: currentDate.toLocaleDateString("ru-RU"),
});

const rules = {
  username: { required, minLength: minLength(3), maxLength:maxLength(14) },
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
    console.log(result.value);
    new Promise((r) => setTimeout(r, 3000)).then(() => {
      store.addContact(newContact);
      router.push("/");
    });
  }
};
</script>

<style scoped lang="scss"></style>
