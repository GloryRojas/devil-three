<template>
  <div>
    <BaseLoading v-if="isLoading" />
    <template v-if="profileData !== null">
      <MainBlock :profile-data="profileData" />
      <ArtisansBlock :artisans-data="artisansData" />
    </template>
  </div>
</template>

<script>
import BaseLoading from "../../components/BaseLoading";
import {getApiAccount} from "../../api/search";
import setError from "../../mixins/setError";
import MainBlock from "./MainBlock/Index";
import ArtisansBlock from "./ArtisansBlock/Index";

export default {
  name: 'ProfileView',
  mixins: [
    setError,
  ],
  components: {
    ArtisansBlock,
    MainBlock,
    BaseLoading,
  },
  data() {
    return {
      isLoading: true,
      profileData: null,
    }
  },
  computed: {
    artisansData() {
      return {
        blacksmith: this.profileData.data.blacksmith,
        blacksmithHardcore: this.profileData.data.blacksmithHardcore,
        jeweler: this.profileData.data.jeweler,
        jewelerHardcore: this.profileData.data.jewelerHardcore,
        mystic: this.profileData.data.mystic,
        mysticHardcore: this.profileData.data.mysticHardcore
      }
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