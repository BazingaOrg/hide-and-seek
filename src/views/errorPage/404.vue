<template>
  <div class="w-full h-full px-6 flex flex-col justify-center items-center">
    <h1 class="text-8xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">404</h1>
    <h2 class="mt-2 text-lg text-slate-700 dark:text-slate-400">
      你要找的页面不存在。你可能输入了错误的地址，或者页面移动了。
    </h2>
    <img class="w-full sm:w-1/2 h-auto" src="~@/assets/images/404.svg" alt="404" />
    <button
      class="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/20 dark:hover:bg-sky-400"
      @click="$router.push({ name: 'login' })"
    >
      回到主页
    </button>
  </div>
</template>

<script setup></script>
