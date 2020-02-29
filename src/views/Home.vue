<template>
  <div class="home">

    <div class="tabs">
			<span class="tab" v-bind:class="{ active: currentFilter == 'illustrations' }" v-on:click="setFilter('illustrations')">illustrations</span>
			<span class="tab" v-bind:class="{ active: currentFilter == 'motions' }" v-on:click="setFilter('motions')">Motions</span>
			<span class="tab" v-bind:class="{ active: currentFilter == 'New Retro' }" v-on:click="setFilter('New Retro')">New Retro</span>
		</div>

 
          <div class="projects">
            <div class="row">
              <div class="col-md-4 col-sm-6 p-0" v-show="currentFilter === project.category " v-bind:key="project.title" v-for="project in projects">
                  <div class="project" >
              <div class="project-image-wrapper">
                <img class="project-image" v-bind:src="getImgUrl(project.image)">
              </div>
            </div>
              </div>
            </div>
          </div>

          <div class="pagination">
            <div class="prev-btn"><i class="fas fa-arrow-left"></i></div>
            <p>1/5</p>
             <div class="next-btn"><i class="fas fa-arrow-right"></i></div>
          </div>

  
     
  </div>
</template>

<script lang='ts'>
import { Component,Vue } from 'vue-property-decorator';
import { getImgUrl } from "../utils/common";


@Component({
  name:'Home',
  components: {

  
  }
})

export default class Home extends Vue {
  getImgUrl = getImgUrl;

  currentFilter: any = 'illustrations'
   currentPage: any = 0
  pageSize: any = 3
  visibleProjects: any = []

   beforeMount() {
    this.updateVisibleProjects();
  }

 projects: any = [
      {image: "img/project-one.jpg", category: 'illustrations'},
      {image: "img/project-one.jpg", category: 'illustrations'},
      {image: "img/project-one.jpg", category: 'illustrations'},
      {image: "img/project-one.jpg", category: 'illustrations'},
      {image: "img/project-one.jpg", category: 'illustrations'},
			{ image: "img/project-three.jpg", category: 'motions'},
			{ image: "img/project-four.jpg", category: 'New Retro'},
			{ image: "img/project-five.jpg", category: 'motions'},
			{image: "img/project-six.jpg", category: 'illustrations'},
			{image: "img/project-three.jpg", category: 'New Retro'},
    ]
    setFilter(filter: any) {
			this.currentFilter = filter;
    }
    
     updatePage(pageNumber: any) {
      this.currentPage = pageNumber;
      this.updateVisibleProjects();
    }
    updateVisibleProjects() {
      this.visibleProjects = this.projects.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

      // if we have 0 visible todos, go back a page
      if (this.visibleProjects.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage -1);
      }
    }
}


</script>

<style lang="scss" scoped>
  .home{
    width: 80%;
    margin: 0 auto;
    margin-top: 25px;
    overflow: hidden;

    .tabs{
      text-align: center;
      border-bottom: 3px solid rgba(78,110,241,0.14);
      .tab{
        margin: 0 15px;
        cursor: pointer;
        text-transform: capitalize;
        padding-bottom: 15px;
        display: inline-block;
        font-weight: 600;
        &.active{
          border-bottom: 3px solid #4E6EF1;
          color: #4E6EF1;
        }
      }

    

      
    }

      .projects{
          margin-top: 25px;

        .project{
          padding: 10px;
          .project-image-wrapper{
            img{
              width: 100%;
            }
          }

        }
      }
  }

  // Project Filter Transition

  .projects-enter {
	transform: scale(0.5) translatey(-80px);
	opacity:0;
}

.projects-leave-to{
	transform: translatey(30px);
	opacity:0;
}

.projects-leave-active {
	position: absolute;
	z-index:-1;
}

.pagination{
  display: flex;
  justify-content: center;
  padding-top: 3rem;
  p{
    margin:0 20px;
  }
}

</style>
