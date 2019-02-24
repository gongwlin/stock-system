
export function getUrlQueryParams(search) {
    let params = {}
    if (!search) { return params }

    let pureSearch = search.split('?')
    pureSearch = pureSearch ? pureSearch[1] : []
    let pureParams = pureSearch.split('&')

    pureParams.forEach(searchItem => {
        let item = searchItem.split('=')
        if (!item) { return }
        params[item[0]] = decodeURIComponent(item[1])
    })

    return params
}
