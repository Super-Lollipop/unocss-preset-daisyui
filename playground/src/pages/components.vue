<script setup lang="ts">
import components from './components'
</script>

<template>
  <div class="flex flex-col">
    <div class="h-10 bg-base-100 sticky top-0 z-20 flex items-center justify-center bg-opacity-90 px-4 py-2 shadow-sm">
      <span>PLAGROUND</span>
    </div>
    <div class="flex flex-row h-[calc(100vh-2.5rem)]">
      <aside
        style="scroll-behavior: smooth;"
        class="w-60 shadow-md overflow-auto overflow-x-hidden"
      >
        <ul
          v-for="item, idx in Object.entries(components)"
          :key="idx"
          class="menu px-4 py-0"
        >
          <li class="menu-title">
            <span>{{ item[0] }}</span>
          </li>
          <li />
          <li v-for="compName, _idx in item[1]" :key="_idx">
            <router-link :to="`/components/${compName}`" active-class="active">
              {{ compName }}
            </router-link>
          </li>
        </ul>
        <div class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [-webkit-mask-image:linear-gradient(transparent,#000000)] [mask-image:linear-gradient(transparent,#000000)]" />
      </aside>
      <div class="p-3 bg-gray-200 w-[calc(100%-15rem)]">
        <div class="card bg-white w-full h-full">
          <div class="card-body overflow-auto overflow-x-hidden">
            <router-view v-slot="{ Component, route }">
              <component
                :is="Component"
                :key="route.fullPath"
              />
            </router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
aside::-webkit-scrollbar {
  width: 12px;
  height: 4px;
}

aside::-webkit-scrollbar-thumb {
  border: 4px solid transparent;
  background-clip: padding-box;
  border-radius: 7px;
  background-color: rgb(137, 137, 137);
}

aside::-webkit-scrollbar-thumb:hover {
  background-color: rgb(202, 202, 202);
}
</style>
