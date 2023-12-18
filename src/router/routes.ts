import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import AdminView from "@/views/AdminView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/about",
    name: "我的",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "无权限页面",
    component: NoAuthView,
  },
  {
    path: "/admin",
    name: "管理员页面",
    component: AdminView,
    meta: {
      access: "canAdmin",
    },
  },
];
