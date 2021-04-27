# Ts-day-12
## composition API 项目创建
### 下载基础包
1. 下载vuex
> npm install vuex

2. 下载axios
> npm install axios

3. 下载vue-router
> npm install vue-router@next

### 配置vue-router

```ts
//导入router包
import { createRouter, CreateWebHashHistory, RouteRecorRaw } from "vue-router";
import Home from "../components/Home/index.vue";

// 创建路由规则
const routes: Array<RouteRecorRaw> = [
  {path: "/", component: Home}
]

// 把路由规则添加给createRouter方法
const router = createRouter({
  history: CreateWebHashHistory(),
  routes
})

// 导入路由
export default
```