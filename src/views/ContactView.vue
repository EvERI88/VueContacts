<template>
    <div class="contact">
      <Contact />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Contact from '@/components/Contact.vue'
  
  export default {
    name: 'ContactView',
    components: {
        Contact
    }
  }
  </script>
  