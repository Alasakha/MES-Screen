// 屏幕适配工具
// 自动根据屏幕大小设定基准分辨率
const baseWidth = window.innerWidth >= 3840 ? 4096 : 1920
const baseHeight = window.innerHeight >= 2000 ? 2160 : 1080


// 获取缩放比例
export const getScale = () => {
  // 获取当前窗口的宽高
  const windowWidth = document.documentElement.clientWidth
  const windowHeight = document.documentElement.clientHeight

  // 计算宽度和高度的缩放比例
  const widthScale = windowWidth / baseWidth
  const heightScale = windowHeight / baseHeight

  // 使用较小的缩放比例，确保内容完全显示
  return Math.min(widthScale, heightScale)
}

// 初始化缩放
export const initScale = () => {
  const app = document.getElementById('app')
  if (!app) return

  const scale = getScale()

  // 应用缩放
  app.style.transform = `scale(${scale})`
}

// 防抖函数
const debounce = (fn, delay = 100) => {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 监听窗口变化
export const screenAdapter = () => {
  // 使用防抖处理resize事件
  const debouncedResize = debounce(() => {
    initScale()
  }, 100)

  window.addEventListener('resize', debouncedResize)

  // 初始化
  initScale()

  // 返回清理函数
  return () => {
    window.removeEventListener('resize', debouncedResize)
  }
} 