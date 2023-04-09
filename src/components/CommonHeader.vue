<template>
    <div class="header-container">
        <div class="l-content">
            <el-button style="margin-right: 20px;" @click="handleMenu" icon="el-icon-menu" size="small"></el-button>
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{ item.label
                }}</el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown @command="handleclick">
                <span class="el-dropdown-link">
                    <img class="user" src="@/assets/images/渔火.jpeg" alt="头像">
                </span>
                <el-dropdown-menu  slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="cancle">退出</el-dropdown-item>

                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Cookie from 'js-cookie';
export default {
    methods: {
        handleMenu() {

            this.$store.commit("collapseMenu")
        },
      
        handleclick(command) {
            if (command === 'cancle') {
                console.log('退出');
                Cookie.remove('token');
                // 清楚cookie中的menu
                Cookie.remove('menu');
                // 跳转到登录界面
                this.$router.push('/login');
            }
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList
        })
    },
    mounted() {
        // console.log(this.tags);
    }
}
</script>
<style lang="less" scoped>
.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }

    .l-content {
        display: flex;
        align-items: center;

        /deep/.el-breadcrumb__item {
            .el-breadcrumb__inner {
                &.is-link {
                    color: #666
                }
            }

            &:last-child {
                .el-breadcrumb__inner {
                    color: #fff;
                }
            }
        }
    }
}
</style>