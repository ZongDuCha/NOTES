<template>
  <div class="Options">
      <div class="top">
          <div class="logo"><img src="../assets/logo.png" alt=""></div>
          <button :class="show ? 'active' : 'close'" @click="show =! show">全部</button>
          <button :class="show ? 'close' : 'active'" @click="show =! show">收藏</button>
      </div>

      <div class="conter" v-if="show">
          <li v-for="(list, key) in filter" :key="key" :class="active(list.id)"  @click='cont(list.id)'>{{list.titles}}</li>
      </div>

  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapGetters} from 'vuex'
export default {
    name: 'Options',
    data () {
        return {
            show: this.$store.state.show,
            filter: this.$store.getters.fliter
        }
    },
    methods: {
        cont (key) {
            this.$store.commit('cont', key)
        },
        active (key) {
            return this.$store.state.activeNotes.id == key ? 'active' : 'w'
        },
    }
}
</script>

<style lang="scss">
.Options {
    background: #8fcff5;
    height: 100%;
    width: 280px;
    float: left;text-align: center;
    overflow: hidden;

    .top{
        border-bottom: 1px solid #65baec;
        padding-bottom: 40px;
        background: #2ba1e6;
        padding-top: 30px;
        box-shadow: 0 0px 10px #8fcff5;

        img {
            margin-bottom: 30px;width:100px
        }

        button {
                padding: 10px 41px;
                border-radius: 20px;
                border: 1px solid #d5d2d2;
                background: #fff;
                margin: 0 10px;
                transition: .5s;
                outline: none;

                &:hover {
                    background:#0c6aa1;
                    border:1px solid #0c6aa1;
                    color:#fff;
                    cursor: pointer;
                }

                &.active {
                    background:#0c6aa1;
                    border:1px solid #0c6aa1;
                    color:#fff;
                    cursor: pointer;
                }
        }
    }
     // conter
    .conter {
        width: 100%;margin:0 auto;height: auto;

        li {
            color: #fff;
            list-style: none;
            width: 100%;
            height: 35px;
            line-height: 35px;
            cursor: pointer;
            font-size: 20px;
            margin-top: 20px;
            overflow: hidden;

        }
         .active {
            background: #3689bb;
        }
    }
}
</style>
