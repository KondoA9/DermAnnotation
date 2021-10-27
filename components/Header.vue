<template>
  <div>
    <b-navbar
      id="navbar"
      class="shadow-sm"
      toggleable="xl"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand :to="localePath('/')"
        ><img
          class="align-middle"
          :src="`${$router.options.base}favicon.ico`"
          alt="DermAnnotation"
          width="32"
          height="32"
        />
        <span class="align-middle">DermAnnotation</span></b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="localePath('/download')">{{
            $t("pages.download.title")
          }}</b-nav-item>
          <b-nav-item :to="localePath('/manual')">{{
            $t("pages.manual.title")
          }}</b-nav-item>
          <b-nav-item :to="localePath('/dev')">{{
            $t("pages.dev.title")
          }}</b-nav-item>
          <b-nav-item :to="localePath('/contact')">{{
            $t("pages.contact.title")
          }}</b-nav-item>

          <b-nav-item-dropdown text="Language">
            <b-dropdown-item :to="switchLocalePath('ja')">
              日本語
            </b-dropdown-item>
            <b-dropdown-item :to="switchLocalePath('en')">
              English
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div id="header-padding"></div>
  </div>
</template>

<style scoped lang="scss">
#navbar {
  top: 0;
  position: fixed;
  z-index: 100;
  width: 100%;
  padding-left: 6.4vw;
  padding-right: 6.4vw;
  min-height: 4rem;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.nav-item {
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
}

#header-padding {
  height: 4rem;
}
</style>
