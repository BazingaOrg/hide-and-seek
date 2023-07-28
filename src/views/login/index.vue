<template>
  <div class="flex w-full h-full">
    <!-- 左半-图形 -->
    <div class="flex-1 before:w-48 before:h-48 bg-gray-100 half-blur-circle"></div>
    <!-- 右半-表单 -->
    <div class="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div class="mx-auto w-20 h-20 before:w-14 before:h-14 half-blur-circle"></div>
        <img class="sm:hidden mx-auto h-20 w-auto" src="~@/assets/images/logo.png" alt="logo" />
        <h2 class="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          欢迎回来!
        </h2>
        <div class="text-center text-gray-500">很高兴再次见到您!</div>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <!-- 电子邮箱地址 -->
          <div>
            <label for="email" class="form-label-text">电子邮箱地址</label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="form-label-input"
              />
            </div>
          </div>
          <!-- 密码 -->
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="form-label-text">密码</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-violet-600 hover:text-violet-500"
                  >忘记密码?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="form-label-input"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-violet-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              登录
            </button>
          </div>
        </form>

        <p class="mt-5 text-center text-sm text-gray-500">
          没有帐户?
          <a href="#" class="font-semibold leading-6 text-violet-600 hover:text-violet-500"
            >立即注册</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.right-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #613eb7;
}
</style>
