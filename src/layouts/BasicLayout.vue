<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>

<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">fans OJ 平台</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  margin-bottom: 16px;
}

#basicLayout .content {
  background: linear-gradient(to right, #eee, #fff);
  margin-bottom: 16px;
}
#basicLayout .footer {
  position: absolute;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
