
export const type = {
    SWITCH_MENU : 'SWITCH_MENU',
    SET_USERNAME: 'SET_USERNAME'
}

// 菜单点击切换，修改面包屑名称
export function switchMenu(menuName) {
    return {
        type:type.SWITCH_MENU,
        menuName
    }
}

export function setUsername(data) {
    return {
        type: type.SET_USERNAME,
        payload: data
    }
}