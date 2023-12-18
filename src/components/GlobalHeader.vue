<template>
  <a-row
    id="globalHeader"
    class="grid-demo"
    style="margin-bottom: 16px"
    align="center"
  >
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/fansLogo.svg" alt="" />
            <div class="title">fans OJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.username ?? "-1" }}</div>
    </a-col>
  </a-row>
</template>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 48px;
}

.title {
  color: #333;
}
</style>
<script setup lang="ts">
import { routes } from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

const router = useRouter();
const selectedKeys = ref(["/"]);
const store = useStore();
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});
// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     username: "张三",
//     role: "admin",
//   });
//   console.log(store.state.user.loginUser.username);
// }, 1000);
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>
