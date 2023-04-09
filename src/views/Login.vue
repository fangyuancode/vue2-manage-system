<template>
    <div class="login">
        <el-form ref="form" label-with="70px" :inline="true" class="login-container" :model="form" :rules="rules">
            <h3 class="login-title">
                系统登录
            </h3>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item style="margin-left: 12px;" label="密码 " prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="submit" type="primary" style="margin-left: 105px;margin-top: 10px;">登录</el-button>
            </el-form-item>
        </el-form>

    </div>
</template>
<script>
import Mock from "mockjs";
import Cookie from 'js-cookie'
import { getMenu } from '@/api'
export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            rules: {
                username: [
                    { required: true, tigger: "blur", message: '请输入用户名' }
                ],
                password: [
                    { required: true, tigger: "blur", message: '请输入密码' }
                ],
            }
        }
    },
    methods: {
        // 登录
        submit() {

            /*validate对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise*/
            // 1.校验通过
            this.$refs.form.validate((valid) => {
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        console.log(data);
                        if (data.code === 20000) {
                            Cookie.set('token', data.data.token);

                            // 获取菜单的数据存入到store中
                            this.$store.commit('setMenu', data.data.menu);
                            // 将数据传入
                            this.$store.commit('addMenu',this.$router)
                            // 跳转到首页
                            this.$router.push('/home')
                        } else {
                            this.$message.error(data.data.message);
                        }
                    })
                }
            })

        }
    }
}
</script>
<style lang="less" scoped>
.login-container {
    width: 350px;
    border: 1px solid #eaeaea;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 0 25px #cac6c6;
    box-sizing: border-box;

    .login-title {
        text-align: center;
        margin-bottom: 40px;
        font-size: 15px;
        color: #505458;
    }

    .el-input {
        width: 198px;
    }
}
</style>
