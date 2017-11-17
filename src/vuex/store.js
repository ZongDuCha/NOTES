import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    show: true,
    activeNotes: {
        id: '207',
        titles: '加油哦！',
        count: '加油加油',
        stal: true
    },
    note: [
        {
            id: '207',
            titles: '加油哦！',
            count: '加油加油',
            stal: true
        }
    ]
}

const mutations = {
    cont (state,key) {
        // document.querySelectorAll('li')[key].className += 'active'
        for (var i = 0; i < state.note.length; i++) {
            if(key == state.note[i].id) {
                state.activeNotes = state.note[i]
            }
        }
    },
    updata (state, key) {
        document.querySelector('.title').focus()
        state.activeNotes = key
        state.note.push(key)
    },
    deletel (state){
        // vue2.0 $remove被删除 
        for(var k = 0; k < state.note.length; k++){
            if(state.activeNotes.id == state.note[k].id){
                state.note.splice(k,k + 1)
                state.activeNotes = {}
            }
        }
    },
    // 收藏
    stal (state) {
        state.activeNotes.stal = !state.activeNotes.stal 
    }
}

const actions = {
    updata ({commit}) {
        var notes = {
            id : +new Date(),
            titles : '你的标题 ',
            count :  '你的内容',
            stal: false
        }
        commit('updata', notes)
    }
}

const getters = {
    fliter (state) {
        if(state.show){
            return state.note || {}
        }else{
            return state.note.fliter( note.stal ) || {} 
        }
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
