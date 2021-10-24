<template>
  <div>
    <BaseLoading v:if="isLoading" />
    <h1>Profile page</h1>
    <template>
      <div class="grid-container">
        <div class="grid-item item-left">
          <template v-if="profileData !== null">
            <MainBlock :profile-data="profileData" />
          </template>
        </div>
        <div class="grid-item item-right">
          <h1>dercha</h1>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import BaseLoading from "../../components/BaseLoading";
import {getApiAccount} from "../../api/search";
import setError from "../../mixins/setError";
import MainBlock from "./MainBlock/Index";

export default {
  name: 'ProfileView',
  mixins: [
    setError,
  ],
  components: {
    MainBlock,
    BaseLoading,
  },
  data() {
    return {
      isLoading: true,
      profileData: null,
    }
  },
  created() {
    this.isLoading = true;
    this.fetchData();
  },
  methods: {
    async fetchData(){
      const { region, battleTag: account } = this.$route.params;
      try {
        const apiAccount = await getApiAccount({region, account});
        this.profileData = apiAccount;
        this.isLoading = false;
      } catch (e) {
        this.profileData = null;
        const errObj = {
          routeParams: this.$route.params,
          message: e.message,
        }
        if (e.response) {
          errObj.data = e.response.data;
          errObj.status = e.response.status;
        }
        this.setApiErr(errObj);
        await this.$router.push({ name: 'Error' })
      }
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