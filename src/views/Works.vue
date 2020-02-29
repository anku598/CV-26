<template>
  <div class="works">
      <h2 class="page-title">Works Experience</h2>

      <div class="experience-detail">
        <ul>
          <li>
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3">
                 <div class="experience-area">
                <h2>Product Designer </h2>
                <p class="date">May 2017 - June 2018</p>
            </div>
              </div>
              <div class="col-md-9">
                 <div class="experience-name">
              <h2>123 Workforce</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magaliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no setakimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
            </div>
              </div>
            </div>

          </li>

           <li>
            <div class="row">
              <div class="col-md-3 col-lg-3 col-xl-3">
                 <div class="experience-area">
                <h2>UI/UX Designer</h2>
                <p class="date">May 2017 - June 2018</p>
            </div>
              </div>
              <div class="col-md-9">
                 <div class="experience-name">
              <h2>Uideck Agency</h2>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magaliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no setakimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
            </div>
              </div>
            </div>

          </li>
        </ul>
      </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop,Vue } from 'vue-property-decorator';

@Component({
  name:'Works',
  components: {
  
  }
})

export default class Works extends Vue {
  
}


</script>

<style lang="scss" scoped>
    .works{
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

      .experience-detail{
        ul{
          margin: 0;
          padding: 0;
          list-style: none;
          li{
            margin-bottom: 3rem;
            &:last-child{
              margin-bottom: 0;
            }
          }
        }
      }

      .experience-area{
        h2{
          position: relative;
          &:after{
            position: absolute;
            top: 50%;
            right: 50px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #313450;
            content: "";
            transform: translateX(-50%);

          }
        }
      }

      .experience-area,.experience-name{
        h2{
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: capitalize;
          margin-bottom: 15px;
          color: #313450;
        }

        p{
          font-weight: 400;
          font-size: 17px;
          color: #7A7E9E;
          line-height: 28px;
        }
      }
    }
</style>
