<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">

    <ActiveSkills :skills="skills.active"/>
    <hr>
    <PassiveSkills :skills="skills.passive"/>

  </div>
</template>


<script>
import ActiveSkills from "./ActiveSkills";
import PassiveSkills from "./PassiveSkills";
export default {
  name: 'HeroSkills',
  components: {PassiveSkills, ActiveSkills},
  props: {
    skills: {
      type: Object,
      required: true,
    }
  }
}
</script>