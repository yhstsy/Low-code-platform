import textComp from "./textComp.vue";
import picComp from "./picComp.vue";
import tabList from "./tabList.vue";

let obj = {
    textComp,
    picComp,
    tabList
}

function install(Vue) {
    Object.keys(obj).forEach(key => {
        Vue.component(key, obj[key])
    })
}

let API = {
    version:'1.0',
    install
}

export default API