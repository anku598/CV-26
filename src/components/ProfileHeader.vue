<template>
<div class="profile-header">
    <div class="bg">
    <div class="profile-content">
        <div class="profile-image-content">
            <div class="pro-picture">
            <div class="circular-image">
                    <img src="@/assets/img/profile-picture.jpg" alt="Profile image">
            </div>
                <a href="#" class="chat-icon"><img src="@/assets/img/chat-icon.svg" alt="Chat Icon"></a>
            </div>
            <div class="bio">
                <h3 class="name">Robert Michel</h3>
            <p class="short-bio">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonum yirmod tempor invidunt ut labore.</p>
            </div>
        </div>
        <div class="social-widgets">
           <a href="#"> <i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>
        <div class="hiring-widgets">
            <div class="top-area">
                <p>View interviews :</p>
                <a href="#" class="btn custom-margin media-btn" > <img src="../assets/img/speaker.svg" alt=""> audio & text</a>
                <a href="#" class="btn media-btn">  <img src="../assets/img/video-camera.svg" alt=""> Play Video</a>
            </div>
            <div class="bottom-area">
                <div class="rate">
                    <h3>$15</h3>
                    <p>Hourly rate</p>
                </div>
                <div class="rate custom-margin">
                    <h3>10 Hours</h3>
                    <p>Weekly Availability</p>
                </div>
                <a href="#" class="btn hire-me">Hire me</a>
            </div>
        </div>
    </div>
    </div>

    <Navbar/>
</div>
</template>

<script lang='ts'>
import { Component, Prop,Vue } from 'vue-property-decorator';
import Navbar from '@/components/Navbar.vue';
@Component({
  name:'ProfileHeader',
  components: {
    Navbar
  }
})


export default class ProfileHeader extends Vue {
  
}

</script>

<style scoped lang='scss'>
.profile-header{
    height: 100%;
    width: 100%;
    position: relative;
    .bg{
    background: url('../assets/img/bg-pattern.svg') no-repeat;
    background-size: 100% auto;
    width: 100%;
    margin-top: -2px;
    position: relative;
    z-index: 1;
    padding-bottom: 15%;
    }

    .profile-content{
        width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
        padding-top: 2%;

    .profile-image-content{
        display: flex;
        align-items: center;
        flex: 1;

        .pro-picture{
            position: relative;
            .circular-image{
            width: 150px;
            height: 150px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            }

            .chat-icon{
                position: absolute;
                z-index: 5;
                top: 103px;
                right: -1px;
                background: #fff;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
    }

    .social-widgets,.hiring-widgets,.profile-image-content{
        flex: 1;
    }

    .social-widgets{
        text-align: center;
        a{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(255,255,255,0.15);
            margin-right: 15px;
            font-size: 1.1rem;
            color: #fff;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            transition: all 0.5s ease-in-out;
            text-decoration: none;

            &:hover{
                color: #4E6EF1;
                background: rgba(255,255,255,1);
            }
        }
    }

    .hiring-widgets{

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        .top-area{
            display: flex;
            align-items: center;
            p{
                width: 135px;
                color: #fff;
                text-transform: capitalize;
                font-weight: 600;
            }
        }

        .bottom-area{
            display: flex;
            margin-top: 40px;
            width: 100%;
            justify-content: flex-end;
            color: #fff;
        }

        .rate{
            text-align: center;
            h3{
                font-weight: 700;
                font-size: 1.1rem;
            }

            p{
                font-weight: 600;
                text-transform: capitalize;
            }
        }
    }

    .bio{
        color: #fff;
        margin-left: 20px;
        font-size: 1.2rem;
        .name{
            font-weight: 700;
        }

        .short-bio{
            margin-top: 15px;
            line-height: 22px;
            font-weight: 400;

        }
    }
}

.custom-margin{
    margin: 0 45px;
}

.btn{
    width: 200px;
    height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.15);
    padding: 0 30px;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    color: #fff;
    text-transform: capitalize;
    border-radius: 32px;
    img{
        margin-right: 12px;
    }
}

.hire-me{
    background: #fff;
    color: #4E6EF1;
}

</style>