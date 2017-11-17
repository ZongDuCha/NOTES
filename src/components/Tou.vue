<template>
  <div class="container">
      <h1>NOTES</h1>
      <img src="../assets/File.png" alt="">
      <img src="../assets/data.png" alt="" @click="updata">
      <!-- 图片不放在assets 是因为加载网页时的时候 图片名称加上了随机数 会导致图片无法加载 所以把图片放在static -->
      <img :src="this.$store.state.activeNotes.stal ? '../../static/Full-s.png' : '../../static/Full.png'" @click="stal">
      <img src="../assets/delete.png" alt="" @click='deletel'>
  </div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'
import store from 'vuex'
export default {
    name:'Tou',
    data () {
      return {
        show: this.$store.state.activeNotes.stal ? 'stal' : 'stal-s'
      }
    },
    methods: {
      ...mapActions([
        'updata',
      ]),
      ...mapMutations([
        'deletel',
        'stal'
      ])
    }
}
</script>

<style lang="scss">
*{margin:0;padding:0}
.container{
  background:#385996;height: 100%;width: 200px;text-align: center;overflow: hidden;float: left;
  h1 {
    margin-top: 57px;
    font-size: 40px;
    text-shadow: 1px 1px 0px #fff;
    color: #fff;
  }

  img {
    margin-top: 60px;
    width: 50px;
    cursor: pointer;
    padding: 0 30px
  }
}
</style>
