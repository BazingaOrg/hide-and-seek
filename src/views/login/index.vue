<template>
  <div
    class="flex justify-center items-center w-full h-full bg-gradient-to-b from-violet-50 to-violet-200"
  >
    <div
      class="box-border flex justify-between w-full sm:w-[545px] md:w-[545px] lg:w-[785px] sm:h-[480px] h-full sm:p-8 p-4 rounded-md shadow-md bg-white"
      v-show="loginOrRegister === 'login'"
    >
      <div class="box-border w-full lg:w-[415px] h-full p-2">
        <img
          class="mx-auto h-20 w-auto animate-bounce"
          src="~@/assets/images/logo.png"
          alt="logo"
        />
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          欢迎回来!
        </h2>
        <div class="mb-2 text-center text-gray-500">很高兴再次见到您!</div>

        <a-form :model="loginData" layout="vertical" :rules="formRules" @submit="submitLoginData">
          <a-form-item
            field="email"
            label="电子邮件"
            validate-trigger="change"
            feedback
            required
            asterisk-position="end"
          >
            <a-input
              v-model.trim="loginData.email"
              allow-clear
              placeholder="请输入电子邮件"
              autocomplete="off"
            />
          </a-form-item>
          <a-form-item
            field="password"
            label="密码"
            validate-trigger="change"
            feedback
            required
            asterisk-position="end"
          >
            <a-input-password
              v-model.trim="loginData.password"
              allow-clear
              placeholder="请输入密码"
              autocomplete="off"
              @keyup.enter="submitLoginData"
            />
            <template #extra>
              <span
                class="cursor-pointer text-sm font-semibold text-violet-600 hover:text-violet-500"
                >忘记密码?</span
              >
            </template>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" long html-type="submit">登录</a-button>
            <template #extra>
              <p class="text-center text-sm text-gray-500">
                没有账号?
                <span
                  class="cursor-pointer font-semibold leading-6 text-violet-600 hover:text-violet-500"
                  @click="goLoginOrRegister"
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
        <canvas
          class="w-44 h-44 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-700"
          ref="loginQRCode"
        ></canvas>
        <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          通过二维码登录
        </h2>
        <div class="text-center text-gray-500">
          通过 <strong>藏猫猫小程序</strong> 扫描二维码，便可即时登录。
        </div>
      </div>
    </div>
    <div
      class="box-border flex flex-col w-full h-full sm:w-[486px] sm:h-[620px] sm:p-8 p-4 rounded-md shadow-md bg-white"
      v-show="loginOrRegister === 'register'"
    >
      <img class="mx-auto h-20 w-auto animate-bounce" src="~@/assets/images/logo.png" alt="logo" />
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        创建一个账号
      </h2>

      <a-form
        :model="registerData"
        layout="vertical"
        :rules="formRules"
        @submit="submitRegisterData"
      >
        <a-form-item
          field="email"
          label="电子邮件"
          validate-trigger="change"
          feedback
          required
          asterisk-position="end"
        >
          <a-input
            v-model.trim="registerData.email"
            allow-clear
            placeholder="请输入电子邮件"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item
          field="nickname"
          label="昵称"
          validate-trigger="change"
          feedback
          required
          asterisk-position="end"
        >
          <a-input
            v-model.trim="registerData.nickname"
            allow-clear
            placeholder="请输入昵称"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item
          field="username"
          label="用户名"
          validate-trigger="change"
          feedback
          required
          asterisk-position="end"
        >
          <a-input
            v-model.trim="registerData.username"
            allow-clear
            placeholder="请输入用户名"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item
          field="password"
          label="密码"
          validate-trigger="change"
          feedback
          required
          asterisk-position="end"
        >
          <a-input-password
            v-model.trim="registerData.password"
            allow-clear
            placeholder="请输入密码"
            autocomplete="off"
            @keyup.enter="submitRegisterData"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" long html-type="submit">注册</a-button>
          <template #extra>
            <p class="text-center text-sm text-gray-500">
              进行注册即表示您同意 <strong>藏猫猫</strong> 的<a-link href="#">服务条款</a-link
              >和<a-link href="#">隐私政策</a-link>
            </p>
          </template>
        </a-form-item>
        <div
          class="text-sm cursor-pointer font-semibold leading-6 text-violet-600 hover:text-violet-500"
          @click="goLoginOrRegister"
        >
          已经拥有账号?
        </div>
      </a-form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue'
import QRCode from 'qrcode'

const formRules = {
  email: [
    { required: true, message: '电子邮件 - 这是必填项🫡' },
    {
      validator: (value, cb) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        !emailRegex.test(value) && cb('当前输入电子邮件不符合规则🤔')
      }
    }
  ],
  password: [
    { required: true, message: '密码 - 这是必填项🫡' },
    {
      minLength: 8,
      message: '密码最小长度为 8 个字符，要求包含至少一个大写字母、一个小写字母和一个数字🫡'
    },
    {
      validator: (value, cb) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
        !passwordRegex.test(value) && cb('当前输入密码不符合规则🤔')
      }
    }
  ],
  nickname: [
    { required: true, message: '昵称 - 这是必填项🫡' },
    {
      minLength: 4,
      message: '昵称只能包含字母、数字和下划线，且长度在 4 到 16 个字符之间🫡'
    },
    {
      validator: (value, cb) => {
        const nicknameRegex = /^[a-zA-Z0-9_]{4,16}$/
        !nicknameRegex.test(value) && cb('当前输入昵称不符合规则🤔')
      }
    }
  ],
  username: [
    { required: true, message: '用户名 - 这是必填项🫡' },
    {
      minLength: 4,
      message: '用户名只能包含字母、数字和下划线，且长度在 4 到 16 个字符之间🫡'
    },
    {
      validator: (value, cb) => {
        const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/
        !usernameRegex.test(value) && cb('当前输入用户名不符合规则🤔')
      }
    }
  ]
}

const loginOrRegister = ref('login')
const loginQRCode = ref(null)
const loginData = reactive({
  email: '',
  password: ''
})
const registerData = reactive({
  email: '',
  nickname: '',
  username: '',
  password: ''
})

const generateLoginQRCode = () => {
  const codeData = '暂不支持二维码登录功能'
  QRCode.toCanvas(loginQRCode.value, codeData, (error) => {
    if (error) {
      getCurrentInstance().appContext.config.globalProperties.$message.error(
        `生成登录二维码失败: ${error}`
      )
    }
  })
}
const goLoginOrRegister = () => {
  loginOrRegister.value = loginOrRegister.value === 'login' ? 'register' : 'login'
}
const submitLoginData = ({ values, errors }) => {
  if (!errors) {
  }
}
const submitRegisterData = ({ values, errors }) => {
  if (!errors) {
  }
}

onMounted(() => generateLoginQRCode())
</script>
