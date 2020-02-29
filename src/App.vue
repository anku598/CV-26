<template>
  <div id="app">
    <ProfileHeader/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Prop,Vue } from 'vue-property-decorator';

import ProfileHeader from '@/components/ProfileHeader.vue';


@Component({
  name:'App',
  components: {
    ProfileHeader,

  }
})

export default class App extends Vue {
  
}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap-grid.min.css');
@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
@import '@/assets/css/style.scss';
#app {
 padding-bottom: 3rem;

}


</style>
