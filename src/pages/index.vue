<template>
  <div>
    <top></top>
    <list></list>
  </div>
</template>

<script>

import list from '../components/list.vue'
import top from '../components/top.vue'

export default {
  components: {
    list: list,
    top: top,
  }
}
</script>