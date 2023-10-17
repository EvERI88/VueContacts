<template>
  <nav>
    <Headers />
    <div class="select" v-if="route.fullPath == '/'">
      <div class="menu">
        <select
          class="filterCategory"
          name="catefory"
          v-model="category"
          @change="store.filterContact(category)"
        >
          <option value="Колеги">Колеги</option>
          <option value="Родственики">Родственики</option>
          <option value="Все">Все</option>
        </select>

        <router-link to="/addcontacts"
          ><button class="addContact">Добавить контакт</button></router-link
        >
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { useContactsStore } from "./store";
import { ref, computed } from "vue";
import Headers from "./components/Headers.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useContactsStore();
const category = ref(store.getCategory);
</script>
<style lang="scss">
@font-face {
  font-family: "proximanova_black";
  src: url("./font/proximanova_black.otf"),
    url("./font/proximanova_black.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "proximanova";
  src: url("./font/proximanova_regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

$black-font: proximanova_black;
$font: proximanova;
$width-block: 704px;
$width-input: 408px;
$color-text: rgba(84, 84, 84, 1);
$size: 14px;

body {
  font-family: proximanova;
  background-color: rgba(249, 252, 255, 1);
  margin: 0;
}
input {
  max-width: $width-input;
  width: 100%;
  font-size: $size;
  border: 1px solid rgba(221, 221, 221, 1);
  padding-left: 10px;
  height: 44px;
  border-radius: 5px;
}
input:hover,
select:hover {
  border: 1px solid rgba(47, 128, 237, 1);
}
input:focus,
select:focus {
  outline: none;
  border: 1px solid rgba(47, 128, 237, 1);
  color: rgba(47, 128, 237, 1);
  border-radius: 1px;
}
select {
  appearance: none;
  -webkit-appearance: none; /* Safari и Chrome */
  -moz-appearance: none; /* Mozilla */
  -ms-appearance: none; /* IE */
  background-image: url("../src/img/Triangle.svg");
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) center;
}
select,
option {
  width: 100%;
  font-size: $size;
  border: 1px solid rgba(221, 221, 221, 1);
  height: 48px;
  padding-left: 10px;
  border-radius: 5px;
  padding: 10px 10px;
}
.editCategory{
  width: 422px;
}
option:hover {
  background-color: rgba(234, 242, 253, 1);
}

.select {
  height: 56px;
  border-bottom: 1px solid rgba(234, 242, 253, 1);
  background: linear-gradient(0deg, #eaf2fd, #eaf2fd),
    linear-gradient(0deg, #f9fcff, #f9fcff);
  display: flex;
}
.menu {
  display: flex;
  justify-content: space-between;
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  text-align: center;
}

.item-colum {
  padding: 0 64px;
}
.primary {
  margin: 48px 64px 24px 64px;
}
h3 {
  font-size: $size;
}
a {
  text-decoration: none !important;
  color: rgba(84, 84, 84, 1);
}
a,
p {
  word-break: break-word;
}
th {
  color: rgba(181, 181, 181, 1);
  text-transform: uppercase;
  font-family: $font;
  font-weight: 100;
  font-size: 10px;
  line-height: 16px;
}
.item-colum {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  width: 100%;
}
.item-data {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.item-error {
  width: 100%;
  text-align: end;
}
.item-error > p {
  color: rgba(235, 87, 87, 1);
  margin: 0;
  height: 16px;
  font-size: 10px;
}
.error {
  color: rgba(235, 87, 87, 1);
  border-color: rgba(235, 87, 87, 1);
  background-image: url("./img/Vector.svg");
  background-repeat: no-repeat;
  background-position: 97% 50%;
}
.nameText, .regText{
  font-size: $size;
}
.phoneText, .emailText{
  font-size: 12px;
}
.form {
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 6px 0px rgba(148, 181, 225, 0.35);
  width: 704px;
  margin: 20px auto;
}
.block {
  max-width: $width-block;
  width: 100%;
}
.submit {
  padding: 12px 31px;
  border-color: rgb(255 199 0 / 0%);
  background-color: rgba(255, 199, 0, 1);
  color: $color-text;
  font-family: $font;
  max-width: 136px;
  font-size: $size;
  font-weight: bold;
  text-transform: uppercase;

  background-repeat: no-repeat;
  background-position: 10% 50%;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 17px;
  position: relative;
}
.is-outlined {
  background-image: url("./img/Save.svg");
}
.slash{
  display: none;
}
.img-load {
  position: absolute;
  left: 10%;
  top: 14.5px;
}
.img-load.rot {
  animation: 1s linear 0s normal none infinite running rot;
  -webkit-animation: 1s linear 0s normal none infinite running rot;
}
@keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rot {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.submit:hover {
  background-color: rgba(255, 216, 76, 1);
}
.block-button {
  padding-top: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 64px;
}
.addContact {
  background-image: url("./img/Plus.svg");
  background-repeat: no-repeat;
  background-position: 10% 50%;
  font-family: $font;
  font-size: $size;
  font-weight: bolder;
  background-color: rgba(249, 252, 255, 1);
  font-size: 12px;
  text-transform: uppercase;
  padding-left: 20px;
  width: 175px;
  height: 32px;
  border: 1px solid rgba(47, 128, 237, 1);
  border-radius: 50px;
  color: rgba(47, 128, 237, 1);
  cursor: pointer;
}
.filterCategory{
  max-width: 200px; height: 40px
}
.delete {
  color: rgba(47, 128, 237, 1);
  background-color: rgba(249, 252, 255, 1);
  background-image: url("./img/Delete.svg");
  background-repeat: no-repeat;
  background-position: 0 60%;
  padding-left: 10px;
  border: 0px;
  width: 128px;
  height: 15px;
  cursor: pointer;
}
table {
  
  display: grid;
  white-space: nowrap;
  grid-auto-rows: auto;
  grid-gap: 3px;
  width: min-content;
  margin: 0 auto;
  max-width: 990px;
  width: 100%;
  grid-area: content;
  grid-template-columns: repeat(1, 100%);
}
tr {
  text-align: left;
  text-transform: capitalize;
  height: 50px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 25%);
}

.circle {
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: rgba(255, 199, 0, 1);
  display: table;
  margin-right: 10px;
}
.circleLogo{
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: rgba(255, 199, 0, 1);
  display: table;
  margin-right: 10px;
}
.logoContact {
  color: rgba(84, 84, 84, 1);
  display: table-cell;
  vertical-align: middle;
  font-size: 17px;
  text-align: center;
}
$breakpoint-one: 376px;
$breakpoint-two: 576px;
$breakpoint-three: 768px;
$breakpoint-three: 992px;
$breakpoint-four: 1200px;

@media (max-width: $breakpoint-four) {
  
  
  table, .menu{
    padding: 0 20px;
  }
}
@media (max-width: $breakpoint-three) {
  .form {
    width: 552px;
  }
  input {
    width: 288px;
  }
  .editCategory {
    width: 302px;
  }
  
}
@media (max-width: $breakpoint-two) {
  .form {
    width: 352px;
  }
  .item-colum {
    padding: 0 20px;
  }
  input {
    width: 208px;
  }
  .editCategory {
    max-width: 222px;
  }
  #A1,
  #A2,
  #B1,
  #B2 {
    grid-column-start: 2;
    grid-row-end: 2;
  }
  
  #contact {
    grid-row-end: 2;
  }
  #A1, #B1 {
    padding-top: 20px;
  }
  #A2{
    padding-bottom: 8px;
  }
  #B2{
    padding-bottom: 28px;
  }
  .slash{
    display: inline;
  }
  tr{
    grid-template-columns: repeat(3, 33%);
  }
}
@media (max-width: $breakpoint-one) {
  .circle {
    display: none;
  }
  .form {
    max-width: 352px;
    width: 100%;
  }
  input {
    max-width: 171px;
    width: 100%;
  }
  .editCategory {
    max-width: 185px;
    width: 100%;
  }
}
</style>
