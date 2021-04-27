//                                            路由地址类型
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Home/index.vue";

// 创建路由规则
const routes: Array<RouteRecordRaw> = [
  {path: "/", component: Home}
]

// 把路由规则添加给createRouter方法
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router