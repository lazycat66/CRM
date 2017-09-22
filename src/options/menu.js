class Menu {
    constructor(){
        this.main = [
            {
                title: '客户管理',
                children: [
                    {
                        tab: '我的客户'
                    },
                    {
                        tab: '新增客户'
                    },
                    {
                        tab: '待处理客户'
                    }
                ]
            },
            {
                title: '业务报表',
                children: [
                    {
                        tab: '个人'
                    },

                    {
                        tab: '企业'
                    }
                ]
            },
            {
                title: '资源信息',
                children: [
                    {
                        tab: '我的渠道'
                    },

                    {
                        tab: '新渠道'
                    },

                    {
                        tab: '超负荷渠道'
                    }
                ]
            },
            {
                title: '问题反馈',
                children: [
                    {
                        tab: '已处理'
                    },

                    {
                        tab: '待处理'
                    },

                    {
                        tab: '处理中'
                    },

                    {
                        tab: '搁置'
                    }
                ]
            }
        ]
    }
}

export default new Menu();
