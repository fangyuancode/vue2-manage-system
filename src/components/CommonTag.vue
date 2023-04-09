<template>
    <div class="tabs">
        <!-- closable	是否可关闭 -->
        <el-tag v-for=" (item, index) in tags" :key="item.path" :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changeMenu(item)"
            @close="handleClose(item, index)" size="small">
            {{ item.label }}
        </el-tag>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CommonTag',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabList,
        })
    },
    mounted() {
        // console.log(this.$route.name);
    },
    methods: {
        // 点击tag跳转

        changeMenu(item) {
            // console.log(item);
            if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
                this.$router.push(item.name);
            }
        },
        ...mapMutations(['closeTag']),
        // 点击tags删除的逻辑
        handleClose(item, index) {
            // 调用store中的mutation
            this.closeTag(item, index);
            const length = this.tags.length;
            // 删除之后的跳转逻辑
            if (item.name !== this.$route.name) {
                return
            }
            // 表示删除的最后一项
            if (index == length) {
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            } else {
                this.$route.push({
                    name: this.tags[index].name
                })
            }
        }
    }

}
</script>
<style scoped>
.tabs {
    margin-top: 20px;
    margin-left: 20px;
}

.el-tag {
    margin-right: 15px;
    cursor: pointer;
}
</style>