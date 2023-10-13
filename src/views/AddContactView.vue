<template>
  <div class="home">
    <AddContacts />
  </div>
</template>

<script>
// @ is an alias to /src
import AddContacts from "@/components/AddContacts.vue";

export default {
  name: "AddContactView",
  components: {
    AddContacts,
  },
};
</script>
