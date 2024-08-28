<script setup>
import { useUserStore } from '@/stores'
import { userUpdatePasswordService } from '@/api/user'
import PageContainer from '@/components/PageContainer.vue'
import { ref } from 'vue'
import router from '@/router'

const formRef = ref(null)
// 表单数据
const pwdForm = ref({
  old_pwd: '',
  new_pwd: '',
  re_pwd: ''
})

// 自定义校验
const validatePassword = (rule, value, callback) => {
  if (pwdForm.value.new_pwd !== value) {
    callback(new Error('新密码与确认密码不一致'))
  } else {
    callback()
  }
}

// 自定义校验
const validateOldNewPassword = (rule, value, callback) => {
  if (pwdForm.value.old_pwd === pwdForm.value.new_pwd) {
    callback(new Error('原密码和新密码不能一样'))
  } else {
    callback()
  }
}

// 校验规则
const rules = {
  old_pwd: [
    { required: true, message: '请输入原密码', trigger: 'blur' },
    {
      min: 6,
      max: 15,
      message: '密码长度在 6 到 15 个字符之间',
      trigger: 'blur'
    }
  ],
  new_pwd: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      min: 6,
      max: 15,
      message: '密码长度在 6 到 15 个字符之间',
      trigger: 'blur'
    },
    { validator: validateOldNewPassword, trigger: 'blur' }
  ],
  re_pwd: [
    { required: true, message: '请确认新密码', trigger: 'blur' },
    {
      min: 6,
      max: 15,
      message: '密码长度在 6 到 15 个字符之间',
      trigger: 'blur'
    },
    { validator: validatePassword, trigger: 'blur' }
  ]
}

const userStore = useUserStore()
// 提交表单的方法
const handleSubmit = async () => {
  await formRef.value.validate(async (valid) => {
    if (valid) {
      // 表单验证成功后的处理逻辑
      await userUpdatePasswordService(pwdForm.value)
      ElMessage.success('密码修改成功')
      // 密码修改成功后，退出重新登录
      // 1.清空本地存储的 token 和 个人信息
      userStore.setToken('')
      userStore.setUser({})
      // 拦截到登录页
      router.push('/login')
    } else {
      ElMessage.error('密码修改失败')
      return false
    }
  })
}

// 重置表单的方法
const handleReset = () => {
  formRef.value.resetFields()
}
</script>

<template>
  <page-container title="重置密码">
    <el-row>
      <el-col :span="12">
        <el-form
          :model="pwdForm"
          :rules="rules"
          ref="formRef"
          label-width="120px"
          class="form-container"
        >
          <el-form-item label="原密码" prop="old_pwd">
            <el-input type="password" v-model="pwdForm.old_pwd"></el-input>
          </el-form-item>

          <el-form-item label="新密码" prop="new_pwd">
            <el-input type="password" v-model="pwdForm.new_pwd"></el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="re_pwd">
            <el-input type="password" v-model="pwdForm.re_pwd"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="handleSubmit">修改密码</el-button>
            <el-button @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </page-container>
</template>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 20px auto;
}
</style>
