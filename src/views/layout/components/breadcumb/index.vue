<template lang="html">
  <div class="breadcumb">
    <vs-breadcrumb
    :color="activeColor"
    :items="items"
    :style="theme"
    align="left"
    ></vs-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcumb',
  data () {
    return {
      activeColor: '#1DB98D',
      // theme: { color: '#4779ad', backgroundColor: '#1c1f33' },
      items: [
        {
          title: 'Dashboard',
          url: 'dashboard'
        },
        {
          title: 'Link 1',
          url: 'link-1'
        },
        {
          title: 'Link 2',
          disabled: true
        },
        {
          title: 'Active',
          active: true
        }
      ]
    }
  },
  mounted () { console.log(this.theme) },
  computed: {
    // theme: () => this.$theme
  }
}
</script>
