<template>
  <div
    class="flex justify-center items-center w-full h-full bg-gradient-to-b from-violet-50 to-fuchsia-200"
  >
    <div
      class="box-border flex justify-between w-full sm:w-[545px] md:w-[545px] lg:w-[785px] sm:h-[480px] h-full sm:p-8 p-4 rounded-md shadow-md bg-white"
      v-show="loginOrRegister === 'login'"
    >
      <div class="box-border w-full lg:w-[415px] h-full p-2">
        <img
          class="mx-auto h-20 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-700"
          src="~@/assets/images/logo.png"
          alt="logo"
        />
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          欢迎回来!
        </h2>
        <div class="mb-2 text-center text-gray-500">很高兴再次见到您!</div>

        <a-form :model="loginData" layout="vertical">
          <a-form-item
            field="email"
            label="电子邮件"
            validate-trigger="change"
            feedback
            required
            asterisk-position="end"
          >
            <a-input v-model="loginData.email" />
          </a-form-item>
          <a-form-item
            field="password"
            label="密码"
            validate-trigger="change"
            feedback
            required
            asterisk-position="end"
          >
            <a-input v-model="loginData.password" />
            <template #extra>
              <span
                class="cursor-pointer text-sm font-semibold text-violet-600 hover:text-violet-500"
                >忘记密码?</span
              >
            </template>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" long>登录</a-button>
            <template #extra>
              <p class="text-center text-sm text-gray-500">
                没有账号?
                <span
                  class="cursor-pointer font-semibold leading-6 text-violet-600 hover:text-violet-500"
                  @click="goRegister"
                  >立即注册</span
                >
              </p>
            </template>
          </a-form-item>
        </a-form>
      </div>

      <div
        class="box-border w-[240px] h-full p-2 hidden lg:flex flex-col justify-center items-center"
      >
        <canvas class="w-44 h-44" ref="loginCode"></canvas>
        <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          通过二维码登录
        </h2>
        <div class="text-center text-gray-500">
          通过 <strong>手机 APP</strong> 扫描二维码，便可即时登录。
        </div>
      </div>
    </div>
    <div
      class="box-border flex flex-col w-full h-full sm:w-[486px] sm:h-[620px] sm:p-8 p-4 rounded-md shadow-md bg-white"
      v-show="loginOrRegister === 'register'"
    >
      <img
        class="mx-auto h-20 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-700"
        src="~@/assets/images/logo.png"
        alt="logo"
      />
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        创建一个账号
      </h2>

      <a-form :model="registerData" layout="vertical">
        <a-form-item
          field="email"
          label="电子邮件"
          validate-trigger="change"
          feedback
          required
          asterisk-position="end"
        >
          <a-input v-model="registerData.email" />
        </a-form-item>
        <a-form-item field="nickname" label="昵称" validate-trigger="change" feedback>
          <a-input v-model="registerData.nickname" />
        </a-form-item>
        <a-form-item
          field="username"
          label="用户名"
          validate-trigger="change"
          feedback
          required
          asterisk-position="end"
        >
          <a-input v-model="registerData.username" />
        </a-form-item>
        <a-form-item
          field="password"
          label="密码"
          validate-trigger="change"
          feedback
          required
          asterisk-position="end"
        >
          <a-input v-model="registerData.password" />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" long>注册</a-button>
          <template #extra>
            <p class="text-center text-sm text-gray-500">
              进行注册即表示您同意藏猫猫的<a-link href="#">服务条款</a-link>和<a-link href="#"
                >隐私政策</a-link
              >
            </p>
          </template>
        </a-form-item>
        <div
          class="text-sm cursor-pointer font-semibold leading-6 text-violet-600 hover:text-violet-500"
          @click="goRegister"
        >
          已经拥有账号?
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from 'vue'
import QRCode from 'qrcode'

const loginOrRegister = ref('login')
const loginData = reactive({
  email: '',
  password: ''
})
const loginCode = ref(null)
const registerData = reactive({
  email: '',
  nickname: '',
  username: '',
  password: ''
})

const generateQRCode = () => {
  const codeData = '暂不支持二维码登录功能'
  QRCode.toCanvas(loginCode.value, codeData, (error) => {
    if (error) {
      // console.error('生成二维码失败：', error);
    }
  })
}
const goRegister = () => {
  loginOrRegister.value = loginOrRegister.value === 'login' ? 'register' : 'login'
}

onMounted(() => generateQRCode())
</script>
