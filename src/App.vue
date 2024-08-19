<script setup>
// 在Vue3 CompositionAPI中
// 1.获取路由对象 router useRouter
// const router =useRouter()
// 2.获取路由参数 route useRoute
// const route = useRoute
import { useRouter, useRoute } from 'vue-router'
import { useUserStore, useCounterStore } from '@/stores'

const router = useRouter()
const route = useRoute()

const goList = () => {
  // console.log(router, route)
  router.push('/list')
  console.log(router, route)
}

const userStore = useUserStore()
const countStore = useCounterStore()
</script>

<template>
  <div>
    <hr />
    <router-view></router-view>
    <hr />
    <hr />
    <hr />
    我是App
  </div>
  <test-demo></test-demo>
  <el-button @click="$router.push('/home')">跳首页</el-button>
  <el-button @click="goList">跳列表页</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>

  <p>{{ userStore.token }}</p>
  <el-button @click="userStore.setToken('Bearer sidfhheiwhuvyweqrjh')"
    >登录</el-button
  >
  <el-button @click="userStore.removeToken">退出</el-button>

  <hr />
  {{ countStore.count }}
  <el-button @click="countStore.add(2)">加法2</el-button>
</template>

<style scoped></style>
