<template>
  <div>
    <BaseLoading v:if="isLoading" />
    <h1>Profile page</h1>
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData" />
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

</style>