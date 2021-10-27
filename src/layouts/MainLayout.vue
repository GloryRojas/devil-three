<template>
  <div class="container">
    <HeaderBar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script>
  import HeaderBar from "../components/HeaderBar/Index";
  import FooterBar from "../components/Footer/Index";
  export default {
    name: 'MainLayout',
    components: {FooterBar, HeaderBar}
  }
</script>