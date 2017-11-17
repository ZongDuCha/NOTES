<template>
  <div id="app">
    <Tou></Tou>
    <Options></Options>
    <write></write>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Tou from '@/components/Tou'
import Options from '@/components/Options'
import Write from '@/components/Write'
export default {
  name: 'app',
  components:{Tou,Options,Write}
}
</script>

<style lang="scss" scoped>
#app{height: 100%}
</style>
