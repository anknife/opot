<template>
  <div class="head">
    <div class="top">
      <div class="row"><div class="logo" @click="$router.push('/')">OPOT</div></div>
      <div class="row"><div class="navigation" @click="$router.push('/')">搜索</div></div>
      <div class="row"><div class="navigation" @click="goPapers()">我的试卷</div></div>
      <div class="row"><div class="navigation" @click="searchHistory()">搜索历史</div></div>
    </div>
    <div class="user">
      <div class="name" v-if="$store.state.userNow">{{$store.state.userNow}}</div>
      <div class="name" v-else><div @click="signShows()">登录</div></div>
      <div class="port" @click="signShow()">
        <img :src="$store.state.imgSrc" alt="">
      </div>
      <div v-if="$store.state.userNow" class="user-info">
        <div class="info" @click="goYourSpace()">个人中心</div>
        <a href="http://support.qq.com/product/38530" target="_blank" style="color: #333"><div class="info">用户反馈</div></a>
        <div class="info" @click="signOut()">退出登录</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      goPapers () {
        this.$router.push({
          path: '/basket'
        })
      },
      goYourSpace () {
        this.$router.push({path: '/userInfo', query: { info: '0' }})
      },
      signShow () {
        if (sessionStorage.getItem('sessionId')) {
          this.$router.push({path: '/userInfo', query: { info: '0' }})
        } else {
          this.signShows()
        }
      }
    },
    created () {
    }
  }
</script>

<style scoped>
  .head{
    z-index: 990;
    position: fixed;
    width: 100%;
    height: 50px;
    background-color: #2d8cf0
  }
  .top {
    float: left;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-direction: row;
  }
  .row{
    position: relative;
    left: 20px;
    color: #fff;
    margin-right: 20px;
    cursor: pointer;
  }
  .logo{
    font-size: 19px;
    margin: 0;
    padding: 0;
    font-weight: 500;
  }
  .navigation{
    font-size: 14px;
    color: #fff;
    font-family: 微软雅黑;
  }
  .user{
    float: right;
    height: 50px;
    display: flex;
    flex-direction: row;
  }
  .name{
    line-height: 50px;
    color: #fff;
    margin-right: 5px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
  .name div{
    margin-right: 5px;
    cursor: pointer;
  }
  .port{
    margin-top: 11px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: white;
    margin-right: 20px;
    cursor: pointer;
  }
  .port img{
    width: 28px;
    height: 28px;
    cursor: pointer;
    border-radius: 50%;
  }
  .user:hover .user-info{
    display: block;
  }
  .user-info{
    color: #606266;
    position: absolute;
    top: 50px;
    right: 40px;
    background-color: #fff;
    padding:2px 0;
    border-radius: 2px;
    display: none;
  }
  .info{
    cursor: pointer;
    padding: 5px 10px;
  }
  .info:hover{
    background-color: #409eff;
    color: #fff;
  }
</style>
