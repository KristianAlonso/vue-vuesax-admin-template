<template>
  <div class="navbar">
    <vs-navbar
      v-model="activeItem"
      :color="theme.backgroundColor"
      :text-color="theme.textColor"
      :active-text-color="theme.activeTextColor">
      <vs-button v-bind="theme.hamburgerButton" @click="toggleSidebarActiveState"></vs-button>

      <vs-navbar-title :style="{ color: theme.titleColor }">
        Navbar Tittle
      </vs-navbar-title>

      <vs-spacer></vs-spacer>

      <vs-navbar-item index="0">
        <a href="#">Home</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">News</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <a href="#">Update</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      activeItem: 0,
      theme: {
        hamburgerButton: { color: '#1DB98D', icon: 'menu', radius: true, type: 'flat' },
        titleColor: '#4779ad',
        backgroundColor: '#1c1f33', // '#1a1d2e',
        textColor: '#4779ad',
        activeTextColor: '#1DB98D'
      }
    }
  },
  methods: {
    toggleSidebarActiveState () {
      this.$store.dispatch('toggleSidebarActiveState')
    }
  }
}
</script>
