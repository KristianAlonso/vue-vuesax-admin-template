<template>
  <div>
    <navbar />
    <breadcumb />
    <sidebar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Breadcumb from './components/breadcumb/index.vue'
import Navbar from './components/navbar/index.vue'
import Sidebar from './components/sidebar/index.vue'

export default {
  name: 'MainLayout',
  components: {
    Breadcumb,
    Navbar,
    Sidebar
  }
}
</script>
<style>
