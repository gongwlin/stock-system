export function getPath({type,avatar}) {
    // 根据用户信息 返回跳转地址
    // user.type /boss /genius
    // user.avatar /bossinfo /geniusinfo 

    // let url = type === 'boss' ? '/boss' : '/genius'
    // if(!avatar){
    //  url += '/info
    // }
    // return url
    console.log(avatar ? `/${type}` : `/${type}info`)
    return avatar ? `/${type}` : `/${type}info`
}