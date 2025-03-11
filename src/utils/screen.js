// 屏幕适配工具
const baseWidth = 1920
const baseHeight = 1080

// 获取缩放比例
export const getScale = () => {
  const ww = window.innerWidth / baseWidth
  const wh = window.innerHeight / baseHeight
  
  // 计算宽高比
  const currentRatio = window.innerWidth / window.innerHeight
  const baseRatio = baseWidth / baseHeight
  
  // 如果当前屏幕比例与基准比例差异过大，则使用较小的缩放比例
  if (Math.abs(currentRatio - baseRatio) > 0.2) {
    return Math.min(ww, wh)
  }
  
  // 否则优先使用宽度比例
  return ww
}

// 初始化缩放
export const initScale = () => {
  const scale = getScale()
  const dom = document.documentElement
  
  // 设置基准尺寸
  dom.style.width = `${baseWidth}px`
  dom.style.height = `${baseHeight}px`
  
  // 计算居中位置
  const left = (window.innerWidth - baseWidth * scale) / 2
  const top = (window.innerHeight - baseHeight * scale) / 2
  
  // 应用变换
  dom.style.transform = `translate(${left}px, ${top}px) scale(${scale})`
  dom.style.transformOrigin = 'left top'
}

// 监听窗口变化
export const screenAdapter = () => {
  const resizeHandler = () => {
    initScale()
  }
  
  window.addEventListener('resize', resizeHandler)
  initScale()
  
  // 返回清理函数
  return () => {
    window.removeEventListener('resize', resizeHandler)
  }
} 