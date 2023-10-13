<template>
  <div class="home">
    <AllContats />
  </div>
</template>

<script>
// @ is an alias to /src
import AllContats from '@/components/AllContats.vue'

export default {
  name: 'AllContatsView',
  components: {
    AllContats
  }
}
</script>
