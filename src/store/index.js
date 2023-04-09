import Vue from "vue";
import Vuex from 'vuex';
import tab from './tab'
Vue.use(Vuex);
//创建vuex的实例
const store = new Vuex.Store({
    modules: {
        tab,
    }
})

export default store;
