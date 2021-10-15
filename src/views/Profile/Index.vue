<template>
  <div>
    <BaseLoading v:if="isLoading" />
    <h1>Profile page</h1>
  </div>
</template>

<script>
import BaseLoading from "../../components/BaseLoading";
import {getApiAccount} from "../../api/search";
import setError from "../../mixins/setError";

export default {
  name: 'ProfileView',
  mixins: [
    setError,
  ],
  components: {
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
      } finally {
        this.isLoading = false;
      }
    }
  }
}
</script>