<template>
  <div class="skill-progress">
      <!-- <p class="skill-name">{{skill.lang}}</p>
      <div class="bar">
          <div class="progress-bar" v-bind:style = "{'background':skill.color, 'height':skill.percent+'%'}"></div>
      </div> -->
      <div class="skill-content">
          <p class="skill-name">Illustrations</p>
        <div class="bar">
         <div class="box gray"></div>
         <div class="box">90%</div>
         <div class="box"></div>
         <div class="box"></div>
         <div class="box"></div>
         <div class="box"></div>
      </div>
      </div>

      <div class="skill-content">
          <p class="skill-name">New Retro</p>
      <div class="bar">
         <div class="box gray"></div>
         <div class="box gray"></div>
         <div class="box gray"></div>
         <div class="box">50%</div>
         <div class="box"></div>
         <div class="box"></div>
      </div>
      </div>

      <div class="skill-content">
          <p class="skill-name">Motion</p>
      <div class="bar">
         <div class="box gray"></div>
         <div class="box gray"></div>
         <div class="box gray"></div>
         <div class="box gray"></div>
         <div class="box">20%</div>
         <div class="box"></div>
      </div>
      </div>

      
  </div>
</template>

<script lang='ts'>
import { Component, Prop,Vue } from 'vue-property-decorator';

@Component({
  name:'SkillProgress',
  components: {
  
  }
})

export default class SkillProgress extends Vue {
    @Prop() skill: any;
  
}


</script>

<style lang="scss" scoped>
   

    p{
           display: inline-block;
    -webkit-transform: rotate(-90deg);
    transform: translateX(-20px) rotate(-90deg);
    transform-origin: 43% -89%;
    color: #505478;
    font-size: 1.2rem;
    font-weight: 700;
    }

    .skill-progress{
        display: inline-flex;
        align-items: flex-end;
        position: relative;
        margin: 15px;
    }

    .skill-content{
        display: inline-flex;
        align-items: flex-end;
        margin-right: 15px;
    }


    .bar{
            min-height: 280px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background: transparent;
            width: 110px;
    .box{
        background: linear-gradient(180deg, #4E6EF1, #1BE5E5);
        width: 100%;
        height: 40px;
        color: #fff;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .gray{
        background: linear-gradient(180deg, #4E6EF1, #1BE5E5);
        opacity: 0.2
    }
    }
</style>
