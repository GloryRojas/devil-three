<template>
  <div class="grid-container">
    <div class="grid-item item-left">
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes" />
      <HeroesList v-if="hasHeroesList" :heroes="heroesList" />
    </div>
    <div class="grid-item item-right">
      <h1>dercha</h1>
    </div>
  </div>
</template>

<script>
import TopHeroes from "./TopHeroes/Index";
import HeroesList from "./HeroesList/Index";
export default {
  name: 'MainBlock',
  components: {HeroesList, TopHeroes},
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
    hasHeroesList () {
      return this.profileData.data.heroes.length > 3
    },
    topHeroes() {
      return this.profileData.data.heroes.slice(0,3)
    },
    heroesList () {
      return this.profileData.data.heroes.slice(3, this.profileData.data.heroes.length)
    }
  }
}
</script>

<style lang="stylus">
.grid-container
  display grid
  grid-template-columns 1fr

  .grid-item
    &.item-left
      grid-column span 1
    &.item-right
      grid-column span 1

@media (min-width: 992px)
  .grid-container
    display grid
    grid-template-columns repeat(6, 1fr)
    .grid-item
      &.item-left
        grid-column span 4
      &.item-right
        grid-column span 2
</style>