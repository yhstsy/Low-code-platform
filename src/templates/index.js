import textComp from "../templates/textComp";
import picComp from "../templates/picComp";
import tabList from '../templates/tabList'
let obj = {
    textComp,
    picComp,
    tabList
}
// info.type：就是组件的名称
let getComponent = (info,attr,data) => {
    // console.log(obj);
    let component=obj[info.type](attr,data)
    component.info=info
    // console.log('component',component);
    return component
}
export default getComponent