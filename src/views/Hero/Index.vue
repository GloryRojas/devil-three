<template>
  <div>
    <BaseLoading v-if="isLoadingHero" />
    <BaseLoading v-if="isLoadingItems" />
    <HeroDetailHeader v-if="hero" :detail="detailHeader" />
    <b-row>
      <b-col md="12" lg="8" order-lg="2">
        <BaseLoading v-if="isLoadingItems"/>
        <HeroItems v-if="items" :items="items" />
      </b-col>

      <b-col md="12" lg="4" order-lg="1">
        <template v-if="hero">
          <HeroAttributes :attributes="detailStats"/>
          <HeroSkills :skills="hero.data.skills"/>
        </template>
      </b-col>

    </b-row>
  </div>
</template>

<script>
import setError from "../../mixins/setError";
import BaseLoading from "../../components/BaseLoading";
import { getApiHero, getApiDetailHeroItems } from "../../api/search";
import HeroDetailHeader from "./HeroDetailHeader";
import HeroAttributes from "./HeroAttributes/Index";
import HeroSkills from "./HeroSkills/Index";
import HeroItems from "./HeroItems/Index";

export default {
  name: 'HeroView',
  mixins: [setError],
  components: {HeroItems, HeroSkills, HeroAttributes, HeroDetailHeader, BaseLoading },
  data() {
    return {
      isLoadingHero: true,
      isLoadingItems: true,
      hero: null,
      items: null,
    }
  },computed: {
    detailHeader () {
      const {
        name,
        class: classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      } = this.hero.data

      return {
        name,
        classSlug,
        gender,
        level,
        hardcore,
        seasonal,
        paragonLevel,
        alive,
        seasonCreated
      }
    },
    detailStats () {
      return { ...this.hero.data.stats, classSlug: this.hero.data.class }
    },
  },
  created() {
    this.isLoadingHero = true;
    this.isLoadingItems = true;
    const { region, battleTag: account, heroId } = this.$route.params;

    getApiHero({region, account, heroId})
    .then((data) => {
      this.hero = data;
    })
    .catch((err) => {
      this.hero = null;
      const errObj = {
        routeParams: this.$route.params,
        message: err.message,
      }
      if(err.response) {
        errObj.data = err.response.data
        errObj.status = err.response.status
      }
      this.setApiErr(errObj);
      this.$router.push({ name: 'Error' })
    })
    .finally(() => {
      this.isLoadingHero = false;
    })

    getApiDetailHeroItems({ region, account, heroId })
      .then(({ data }) => {
        this.items = data
      })
      .catch((err) => {
        this.items = null
        console.log(err)
      })
      .finally(() => {
        this.isLoadingItems = false
      })
  },
}
</script>