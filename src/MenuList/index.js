const menuList = [
     //  '1': '拣货员',
    // '2': '配送员',
    // '3': '采购员',
    // '4': '管理员',
        { title: '拣货', key: '/pickorder', role: 1, count:0 },
        { title: '配送', key: '/delivery', role: 2, count: 0 },
        { title: '待采购', key: '/waittingpurchase', role: 3, count: 0 },
        { title: '储位设置', key: '/productlocaltion', role: 3, count: 0 },
        { title: '商品入库', key: '/productintostock', role: 3, count: 0 },
        { title: '盘点库存', key: '/stocklist', role: 3, count: 0 },  
        { title: '查看报表', key: "/datatable", count: 0 },
        { title: '订单查看', key: '/orders', common: true, count: 0 },
        { title: '人员管理', key: '/staffmanage', count: 0 },
        { title: '账号设置', key: '/accountsetting', common: true },
    ]

export default menuList;