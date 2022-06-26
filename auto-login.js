var password = Math.round(Math.random() * 10000000000)
let inputs = []
let checkInstance = null
let registerTimer = null
let checkTimer = null
let confirmTimer = null
let submitBtn = null
let subscribeBtn = null
let subscribeTimer = null
let copyBtn = null
let copyTimer = null

const register = () => {
  return new Promise((resolve, reject) => {
    registerTimer = setInterval(() => {
      inputs = document.getElementsByClassName('form-control form-control-alt')
      if (inputs.length >= 4) {
        clearInterval(registerTimer)
        for (let i = 0; i < inputs.length; i++) {
          i == 0 ? inputs[i].value = Math.round(Math.random() * 10000000000) : inputs[i].value = password
        }
        resolve('表单填写成功')
      }
    }, 200)
  })
}

const handleChecked = () => {
  return new Promise((resolve, reject) => {
    checkTimer = setInterval(() => {
      checkInstance = document.getElementsByClassName('custom-control-input')[0]
      if (checkInstance) {
        clearInterval(checkTimer)
        for (const key in checkInstance) {
          if (checkInstance.hasOwnProperty(key)) {
            if (key.indexOf('__reactEventHandlers') != -1) {
              checkInstance[key].onClick()
            }
          }
        }
        resolve('确认')
      }
    }, 200);
  })
}

const confirmClick = () => {
  return new Promise((resolve, reject) => {
    confirmTimer = setInterval(() => {
      submitBtn = document.getElementsByClassName('btn btn-block btn-primary font-w400')[0]
      if (submitBtn) {
        submitBtn.click()
        clearInterval(confirmTimer)
        resolve('点击注册')
      }
    }, 200);
  })
}

const hadnleSubscribe = () => {
  return new Promise((resolve, reject) => {
    subscribeTimer = setInterval(() => {
      subscribeBtn = document.getElementsByClassName('v2board-shortcuts-item')[1]
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
    }, 200);
  })
}

const handleCopy = () => {
  return new Promise((resolve, reject) => {
    copyTimer = setInterval(() => {
      copyBtn = document.getElementsByClassName('item___yrtOv subsrcibe-for-link')[0]
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
    }, 200);
  })
}

register().then(() => {
  handleChecked().then(() => {
    confirmClick().then(() => {
      hadnleSubscribe().then(() => {
        handleCopy()
      })
    })
  })
})


