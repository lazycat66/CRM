class Menu {
    constructor(){
        this.main = [
            {
                title: '客户管理',
                children: [
                    {
                        tab: '我的客户',
                        belong: 'guest',
                        name: 'my'
                    },
                    {
                        tab: '新增客户',
                        belong: 'guest',
                        name: 'create'
                    },
                    {
                        tab: '待处理客户',
                        belong: 'guest',
                        name: 'pending'
                    }
                ]
            },
            {
                title: '业务报表',
                children: [
                    {
                        tab: '个人',
                        belong: 'business',
                        name: 'personal'
                    },

                    {
                        tab: '企业',
                        belong: 'business',
                        name: 'company'
                    }
                ]
            },
            {
                title: '资源信息',
                children: [
                    {
                        tab: '我的渠道',
                        belong: 'source',
                        name: 'my'
                    },

                    {
                        tab: '新渠道',
                        belong: 'source',
                        name: 'new'
                    },

                    {
                        tab: '超负荷渠道',
                        belong: 'source',
                        name: 'overload'
                    }
                ]
            },
            {
                title: '问题反馈',
                children: [
                    {
                        tab: '已处理',
                        belong: 'question',
                        name: 'processed'
                    },

                    {
                        tab: '待处理',
                        belong: 'question',
                        name: 'pending'
                    },

                    {
                        tab: '处理中',
                        belong: 'question',
                        name: 'processing'
                    },

                    {
                        tab: '搁置',
                        belong: 'question',
                        name: 'shelve'
                    }
                ]
            }
        ]
    }
}

export default new Menu();
