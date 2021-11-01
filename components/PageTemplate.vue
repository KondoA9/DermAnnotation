<template>
  <div>
    <CustomHeader />

    <div class="page-wrapper">
      <slot />
    </div>

    <CustomFooter />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})
</script>

<style scoped lang="scss">
.page-wrapper {
  min-height: calc(100vh - 8rem);
}
</style>
