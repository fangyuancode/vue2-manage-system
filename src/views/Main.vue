<template>
    <div>

        <el-container>
            <el-aside width="auto">
                <conmon-aside></conmon-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <common-header></common-header>

                </el-header>
                <common-tag></common-tag>
                <el-main>
                    <!-- 子路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import ConmonAside from '@/components/ConmonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTag from '@/components/CommonTag.vue';
export default {
    components: { ConmonAside, CommonHeader, CommonTag },
}
</script>
<style scoped>
.el-header {
    padding: 0;
}
</style>