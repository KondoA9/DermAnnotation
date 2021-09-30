<template>
  <div>
    <Header />

    <div class="container-fluid py-5">
      <div class="container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9uG4U0mHk3DKKbd61QIs3mtaLMUOGlhJUXgWCkLZI3C9o7w/viewform?embedded=true"
          width="100%"
          height="1050"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { seoMixin } from "@/modules/mixins/seoMixin"

export default Vue.extend({
  mixins: [seoMixin("contact")],
})
</script>
