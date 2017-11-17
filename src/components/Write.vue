<template>
  <div class="Write">
      <input type="text" class="title" placeholder="输入标题" v-model="activeNotes.titles">
      <textarea name="" class="conter" id="" cols="30" rows="10" v-model="activeNotes.count" placeholder="输入内容"></textarea>
  </div>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
    name: 'Write',
    computed: {
        activeNotes () {
            return this.$store.state.activeNotes
        }
    }
}
</script>

<style lang="scss">
.Write {
    padding-left:10px;
    box-sizing: border-box;
    width: 1060px;height:100%;float: left;

    .title {
        width: 90%;
        margin-top: 15px;
        border: 1px solid #ddd;
        border-radius: 15px;
        padding: 13px 10px;
        outline:none;
        transition:.5s;
        box-sizing:border-box;
        font-size:15px;
    }

    .conter {
        width: 90%;
        margin-top: 15px;
        border: 1px solid #ddd;
        border-radius: 15px;
        padding: 13px 10px;
        outline:none;
        box-sizing:border-box;
        transition:.5s;
        overflow: hidden;
        font-size:15px;
        min-height: 500px;
    }
}
</style>
