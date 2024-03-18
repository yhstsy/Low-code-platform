import getAttrStr from '../utils/index'
let handle = (attr, dataStr) => {
    let attribute = [{
        key: "width",
        name: "宽度",
        value: "100",
        type: 'input',
        placeholder: '请输入宽度',
    }, {
        key: "height",
        name: "高度",
        value: "40",
        type: 'input',
        placeholder: '请输入高度',
    }, {
        key: "itemWidth",
        name: "条目高度",
        value: "100",
        type: 'input',
        placeholder: '请输入条目高度',
    },]
    if (attr) {
        attribute = attr
    }
    let data = { list: ['欧洲','亚洲','非洲','美洲'] }
    if (dataStr) {
        data = JSON.parse(dataStr)
    }
    let template = `<tabList ${getAttrStr(attribute)} data='${JSON.stringify(data)}'></tabList>`
    // debugger;
    return { attribute, data, template }
}
export default handle