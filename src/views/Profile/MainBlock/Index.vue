<template>
  <TopHeroes v-if="hasHeroes" :heroes="topHeroes" />
</template>

<script>
import TopHeroes from "./TopHeroes/Index";
export default {
  name: 'MainBlock',
  components: {TopHeroes},
  props: {
    profileData: {
      type: Object,
      required: true,
    }
  },
  computed: {
    hasHeroes () {
      return this.profileData.data.heroes.length
    },
    topHeroes() {
      return this.profileData.data.heroes.slice(0,3)
    }
  }
}
</script>

<style lang="stylus">

</style>