// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://feiniaoyun.xyz/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=feiniaoyun.xyz
// @grant        none
// ==/UserScript==

;(async function () {
  const password = Math.round(Math.random() * 10000000000)
  const email = Math.round(Math.random() * 10000000000)
  let inputs = []
  let checkInstance = null

  let registerTimer = null
  let checkTimer = null
  let confirmTimer = null
  let subscribeTimer = null
  let copyBtn = null
  let copyTimer = null
  let loginTimer = null

  let submitBtn = null
  let subscribeBtn = null

  // 取消弹窗
  let mask = null

  let timer = setInterval(() => {
    mask = document.getElementsByClassName('ant-modal-root')[1]
    console.log(mask)
    if (mask) {
      mask.style.display = 'none'
      clearInterval(timer)
    }
  })

  const register = () => {
    return new Promise((resolve, reject) => {
      registerTimer = setInterval(() => {
        inputs = document.getElementsByClassName(
          'form-control form-control-alt'
        )
        if (inputs.length >= 4) {
          clearInterval(registerTimer)
          for (let i = 0; i < inputs.length; i++) {
            i == 0 ? (inputs[i].value = email) : (inputs[i].value = password)
          }
          resolve({ email, password })
        }
      }, 200)
    })
  }

  const handleChecked = () => {
    return new Promise((resolve, reject) => {
      checkTimer = setInterval(() => {
        checkInstance = document.getElementsByClassName(
          'custom-control-input'
        )[0]
        if (checkInstance) {
          clearInterval(checkTimer)
          for (const key in checkInstance) {
            if (checkInstance.hasOwnProperty(key)) {
              if (key.indexOf('__reactEventHandlers') != -1) {
                checkInstance[key].onClick()
              }
            }
          }
          resolve('勾选√')
        }
      }, 200)
    })
  }

  const confirmClick = () => {
    return new Promise((resolve, reject) => {
      confirmTimer = setInterval(() => {
        submitBtn = document.getElementsByClassName(
          'btn btn-block btn-primary font-w400'
        )[0]
        if (submitBtn) {
          submitBtn.click()
          clearInterval(confirmTimer)
          resolve('点击注册')
        }
      }, 200)
    })
  }

  //  登录
  const handleLogin = () => {
    return new Promise((resolve, reject) => {
      loginTimer = setInterval(() => {
        submitBtn = document.getElementsByClassName(
          'btn btn-block btn-primary font-w400'
        )[0]
        if (submitBtn) {
          inputs = document.getElementsByClassName(
            'form-control form-control-alt'
          )
          if (inputs.length >= 2) {
            clearInterval(registerTimer)
            for (let i = 0; i < inputs.length; i++) {
              i == 0
                ? (inputs[i].value = email + '@qq.com')
                : (inputs[i].value = password)
            }
          }

          submitBtn.click()
          clearInterval(confirmTimer)
          resolve('点击登录')
        }
      }, 200)
    })
  }

  const handleSubscribe = () => {
    return new Promise((resolve, reject) => {
      subscribeTimer = setInterval(() => {
        subscribeBtn = document.getElementsByClassName(
          'v2board-shortcuts-item'
        )[1]
        if (subscribeBtn) {
          for (const key in subscribeBtn) {
            if (subscribeBtn.hasOwnProperty(key)) {
              if (key.indexOf('__reactEventHandlers') != -1) {
                subscribeBtn[key].onClick()
              }
            }
          }
          clearInterval(subscribeTimer)
          resolve('点击订阅')
        }
      }, 200)
    })
  }

  const handleCopy = async () => {
    return new Promise((resolve, reject) => {
      copyTimer = setInterval(() => {
        copyBtn = document.getElementsByClassName(
          'item___yrtOv subsrcibe-for-link'
        )[0]
        if (copyBtn) {
          for (const key in copyBtn) {
            if (copyBtn.hasOwnProperty(key)) {
              if (key.indexOf('__reactEventHandlers') != -1) {
                copyBtn[key].onClick()
              }
            }
          }
          clearInterval(copyTimer)
          resolve('拷贝完成')
        }
      }, 200)
    })
  }
  await register()
  await handleChecked()
  await confirmClick() // 注册成功
  await handleLogin()
  await handleSubscribe()
  await handleCopy()
})()
