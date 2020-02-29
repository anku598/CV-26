<template>
    <div class="navbar">
        <router-link to="/">
          <img src="../assets/img/book.svg" alt="">
          <p>Portfolio</p>
        </router-link>
        <router-link to="/works">
         <img src="../assets/img/book.svg" alt="">
          <p>Works</p></router-link>
        <router-link to="/education">
         <img src="../assets/img/book.svg" alt="">
          <p>Education</p></router-link>
        <router-link to="/skills">
         <img src="../assets/img/book.svg" alt="">
          <p>Design skills</p></router-link>
    </div>
</template>

<script lang="ts">

import { Component, Prop,Vue } from 'vue-property-decorator';

@Component({
  name:'Navbar',
  components: {
  
  }
})

export default class Navbar extends Vue {
  
}

</script>

<style lang="scss" scoped>
  .navbar {
        position: absolute;
        bottom: 85px;
        left: 50%;
        z-index: 2;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;
        width: 50%;
  

  a {
    font-weight: bold;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-weight: 700;
    text-transform: capitalize;
    p{
      font-size: 1rem;
      display: block;
    }
 
    &:nth-child(1){
      bottom: -30px;
      position: relative;
    }

    &:nth-child(2){
      bottom: -56px;
      position: relative;
    }

    &:nth-child(3){
      bottom: -56px;
      position: relative;
    }

    &:nth-child(4){
      bottom: -30px;
      position: relative;
    }
    img{
     width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 3px solid #fff;
    padding: 10px;
    background: #4E6EF1;
    margin-bottom: 16px;
    transition: all 0.3s ease-in-out;
    }

    &.router-link-exact-active {
      color: #4E6EF1;

img{
      -webkit-box-shadow: -1px 4px 16px -9px rgba(78,110,241,1);
-moz-box-shadow: -1px 4px 16px -9px rgba(78,110,241,1);
 box-shadow: -1px 4px 16px -9px rgba(78,110,241,1);

}
    }
  }
}
</style>