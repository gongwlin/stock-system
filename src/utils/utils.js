function paddingPrefixWithZero(data) {
    return data.toString().padStart(2, '0')
}

export default {
    formateDate(time){
        if(!time)return '';
        let date = new Date(time);
        return date.getFullYear() + '-' + (paddingPrefixWithZero(date.getMonth() + 1)) + '-' + paddingPrefixWithZero(date.getDate()) + ' ' + paddingPrefixWithZero(date.getHours()) + ':' + paddingPrefixWithZero(date.getMinutes()) + ':' +paddingPrefixWithZero(date.getSeconds());
    },
    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:Number(data.page),
            pageSize:data.page_size,
            total: data.total_count,
            showTotal:()=>{
                return `共${data.total_count}条`
            },
            showQuickJumper:true
        }
    },
    // 格式化金额,单位:分(eg:430分=4.30元)
    formatFee(fee, suffix = '') {
        if (!fee) {
            return 0;
        }
        return Number(fee).toFixed(2) + suffix;
    },
    // 隐藏手机号中间4位
    formatPhone(phone) {
        phone += '';
        return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
    },
    // 隐藏身份证号中11位
    formatIdentity(number) {
        number += '';
        return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
    },
    // getOptionList(data){
    //     if(!data){
    //         return [];
    //     }
    //     let options = [] //[<Option value="0" key="all_key">全部</Option>];
    //     data.map((item)=>{
    //         options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    //     })
    //     return options;
    // },
    /**
     * ETable 行点击通用函数
     * @param {*选中行的索引} selectedRowKeys
     * @param {*选中行对象} selectedItem
     */
    updateSelectedItem(selectedRowKeys, selectedRows, selectedIds) {
        if (selectedIds) {
            this.setState({
                selectedRowKeys,
                selectedIds: selectedIds,
                selectedItem: selectedRows
            })
        } else {
            this.setState({
                selectedRowKeys,
                selectedItem: selectedRows
            })
        }
    },
}