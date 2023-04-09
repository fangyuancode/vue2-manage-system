import Cookie from "js-cookie";

export default {
    state: {
        isCollapse: false,//用于控制菜单的展开还是收起
        tabList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 's-home',
                url: 'Home/Home'
            },
        ],//面包屑的数据

        menu: [],
    },
    mutations: {
        // 修改菜单展开收起
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 更新面包屑数据
        selectMenu(state, val) {
            // console.log('val', val);
            // 1.判断添加数据是否为首页
            if (val.name !== 'home') {
                // findIndex,如果数据存在返回当前数据的索引，不存在返回-1
                const index = state.tabList.findIndex(item => item.name === val.name)
                // 如果不存在
                if (index === -1) {
                    state.tabList.push(val);
                }
            }
        },
        // 删除指定的tag数据
        closeTag(state, item) {
            console.log("item", item);
            const index = state.tabList.findIndex(val => val.name === item.name);
            state.tabList.splice(index, 1);
        },

        //设置menu的数据
        setMenu(state, val) {
            state.menu = val;
            // 使用cookie做缓存，JSON.stringify将一个对象序列化字符串
            Cookie.set('menu', JSON.stringify(val));
        },

        // 动态注册路由
        addMenu(state, router) {
            // 判断当前缓存中释放有数据
            if (!Cookie.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookie.get('menu'));
            state.menu = menu;
            //处理动态路由的数据
            const menuArray = [];
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item;
                    })
                    menuArray.push(...item.children);
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item);

                }
            });
            console.log("menuArray~~~~~", menuArray);
            // 路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main',item);
            })
        }
    }
}