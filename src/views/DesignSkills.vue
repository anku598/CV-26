<template>
  <div class="design_skills">
        <h2 class="page-title">Design Skills</h2>
      <!-- <SkillProgress v-for="(skill,idx) in skills" :skill = "skill" :key="idx"/> -->
      <SkillProgress/>
  </div>
</template>

<script lang='ts'>
import { Component, Prop,Vue } from 'vue-property-decorator';
import SkillProgress from '../components/SkillProgress.vue'

@Component({
  name:'DesignSkills',
  components: {
      SkillProgress
  }
})

export default class DesignSkills extends Vue {
  @Prop() skill: any; 
  
  skills: any = [
    {lang:"html5",percent:90,color:"#ec407a"},
    {lang:"css",percent:25,color:"#ec407a"},
    {lang:"javascript",percent:40,color:"#ec407a"},
    {lang:"python",percent:54,color:"#ec407a"}
  ]

}


</script>

<style lang="scss" scoped>
  .design_skills{
    width: 80%;
    margin: 0 auto;

    .page-title{
        font-weight: 700;
        font-size: 1.5rem;
        padding-bottom: 10px;
        border-bottom: 3px solid rgba(78,110,241,0.14);
        text-transform: capitalize;
        margin-bottom: 40px;
        color: #313450;
      }
  }

</style>
