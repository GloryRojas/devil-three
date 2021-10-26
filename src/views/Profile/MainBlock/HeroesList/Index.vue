<template>
  <div class="heroes-list border-top border-secondary mt-5 pt-5">
    <b-table
      dark
      hover
      small
      striped
      stacked="sm"
      :items="heroes"
      :fields="fields" >
      <template v-slot:cell(name)="data">
        <HeroIco :hero="data.item" />
      </template>
      <template v-slot:cell(class)="data">
        <HeroClassLevel :hero="{classSlug: data.item.class, level: data.item.level}" />
      </template>
      <template v-slot:cell(kills)="data">
        <span>{{ data.item.kills.elites }}</span>
      </template>
    </b-table>
  </div>
</template>

<script>
import HeroIco from "./HeroIco";
import HeroClassLevel from "./HeroClassLevel";

export default {
  name: 'HeroesList',
  components: {HeroClassLevel, HeroIco},
  props: {
    heroes: {
      type: Array,
      required: true,
    }
  },
  data (){
    return {
      fields: [
        {
          key: 'name',
          label: 'Name'
        },
        {
          key: 'class',
          label: 'Class',
          sortable: true,
        },
        {
          key: 'kills',
          label: 'Elite kills',
          sortable: true,
        }
      ]
    }
  },
}
</script>