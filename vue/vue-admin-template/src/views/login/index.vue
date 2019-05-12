<template>
  <div class="login-page">
    <el-form
      ref="form"
      :model="form"
      label-width="80px">
      <el-form-item
        :rules="[
          { required: true, message: '请输入账号', trigger: 'blur' },
          { type: 'email', message: '请输入正确的账号', trigger: ['blur', 'change'] }
        ]"
        prop="phone"
        label="账号">
        <el-input v-model="form.phone"/>
      </el-form-item>
      <el-form-item
        :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]"
        prop="password"
        label="密码">
        <el-input
          v-model="form.password"
          type="password"/>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          type="primary"
          @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { login } from '@/api/user';
import { setToken } from '@/utils/auth';

export default {
  data() {
    return {
      loading: false,
      form: {
        phone: 'xsxxx@qq.com',
        password: 'cxvcv',
      },
    };
  },
  methods: {
    onSubmit() {
      this.loading = true;
      login(this.form).then((res) => {
        this.$message({
          message: res.message,
          type: 'success',
        });
        setToken(res.data.token);
        this.$router.push('/');
        console.log(res);
      }).finally(() => {
        this.loading = false;
      });

      console.log(this.form);
    },
  },
};
</script>
<style lang="scss" scoped>

</style>

