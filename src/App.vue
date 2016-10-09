<template>
  <div>
  	<top></top>
    <list></list>
  </div>
</template>

<script>

import list from './list.vue'
import top from './top.vue'

export default {
  components: {
    list: list,
    top: top,
  }
}
</script>