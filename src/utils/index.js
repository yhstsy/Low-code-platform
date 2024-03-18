import Vue from 'vue'
let getAttrStr = (attrs) => {
    let attrStr = ''
    attrs.forEach(element => {
        attrStr += element.key + "=" + element.value + "   "
    });
    return attrStr
}

export const getId = () => { // 获取随机ID
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + '-' + s4();
    // 0x10000：以0x开始的数据表示16进制，10000转成十进制就是65536，
    // 实际上这是为了后面获取四位数随机号码所以乘以10000，
    // 而为了获取包含字母在内的字符就用16进制。
}

export const mountedComponent = (component) => {
    let id = component.info.id
    // console.log('*****',id,document.getElementById(id));
    let data = {}
    let compWidth = 0;
    let compHeight = 0;
    if (component.attribute) {
        component.attribute.forEach(item => {
            // console.log('@@@',item.key,item.value);
            data[item.key] = item.value
            if (item.key === 'width') {
                compWidth = item.value
            }
            if (item.key === 'height') {
                compHeight = item.value
            }
        })
    }
    setTimeout(() => {
        new Vue({
            el: document.getElementById(id),
            template: component.template,
            name: id.toString(),
            data() {
                return data
            },
            mounted() {
                this.$el.id = id;
                this.$el.style.position = "absolute";
                this.$el.style.cursor = "pointer";
                this.$el.style.left = `${component.position.left}px`;
                this.$el.style.top = `${component.position.top}px`;
                this.$el.style.zIndex = `${component.position.zIndex}`;
                this.$el.style.width = `${compWidth}px`;
                this.$el.style.height = `${compHeight}px`;
                // console.log('@@@',this.$el);
            },
        })
    }, 200);
}

export default getAttrStr