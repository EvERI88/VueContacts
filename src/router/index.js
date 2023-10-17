import { createRouter, createWebHistory } from "vue-router";
import AllContatsView from "../views/AllContatsView.vue";
import AboutView from "../views/AboutView.vue";
import AddContactView from "../views/AddContactView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  { path: "/", name: "allcontats", component: AllContatsView },
  { path: "/addcontacts", name: "addcontacts", component: AddContactView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/contacts/:idContact", name: "contact", component: ContactView},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
