<template>
  <div>
    <Header />

    <div class="container-fluid py-5">
      <div class="container my-4">
        <div class="text-center">
          <h1 class="mb-5">Contact</h1>
          <p>{{ $t("contact.description") }}</p>
        </div>

        <iframe @load="submitCompleted" name="dummy" style="width: 0px; height: 0px; border: 0px" />

        <form
          id="contact-form"
          action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSf9uG4U0mHk3DKKbd61QIs3mtaLMUOGlhJUXgWCkLZI3C9o7w/formResponse"
          target="dummy"
          @submit.prevent="submit"
        >
          <div class="form-group">
            <label>{{ required("contact.email") }}</label>
            <input type="email" class="form-control" required name="emailAddress" />
          </div>

          <div class="form-group">
            <label>{{ $t("contact.name") }}</label>
            <input type="text" class="form-control" name="entry.1030544017" />
          </div>

          <div class="form-group">
            <label>{{ required("contact.type") }}</label>
            <select class="custom-select" required name="entry.261537126">
              <option hidden></option>
              <option v-for="(k, index) in kind" :key="k" :value="k">
                {{ $t("contact.kind")[index] }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>{{ $t("contact.version") }}</label>
            <input type="text" class="form-control" name="entry.82995904" />
          </div>

          <div class="form-group">
            <label>{{ required("contact.message") }}</label>
            <textarea class="form-control" rows="6" required name="entry.626982020" />
          </div>

          <center>
            <div v-if="!showSubmittedMessage">
              <p class="mb-5">{{ $t("contact.confirmation") }}</p>
              <button v-if="!submitting" type="submit" class="btn btn-primary px-4">
                {{ $t("contact.submit") }}
              </button>
              <div v-else class="spinner-border text-primary" role="status">
                <span class="sr-only">Submitting...</span>
              </div>
            </div>
            <div v-else>
              <h3>{{ $t("contact.submitted") }}</h3>
            </div>
          </center>
        </form>
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
  data() {
    return {
      kind: ["Bug", "Request", "Other"],
      submitting: false,
      showSubmittedMessage: false,
    }
  },
  methods: {
    required(i18nCode: string): string {
      return this.$t(i18nCode).toString() + this.$t("contact.required").toString()
    },
    submit() {
      this.submitting = true
      try {
        ;(document.getElementById("contact-form") as HTMLFormElement).submit()
      } catch {
        alert("Failed to submit")
        this.submitting = false
      }
    },
    submitCompleted() {
      if (this.submitting) {
        this.submitting = false
        this.showSubmittedMessage = true
        setTimeout(() => {
          this.showSubmittedMessage = false
        }, 3000)
        ;(document.getElementById("contact-form") as HTMLFormElement).reset()
      }
    },
  },
})
</script>

<style lang="scss">
.form-group {
  margin-bottom: 3.5rem;
}
</style>
