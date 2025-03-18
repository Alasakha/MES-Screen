// 适配 1080p、2K、4K、2160×4096
const getBaseResolution = () => {
  const { innerWidth: width, innerHeight: height } = window;

  if (width >= 4096 || height >= 2160) {
      return { baseWidth: 4096, baseHeight: 2160 };  // 4K
  } else if (width >= 2560 || height >= 1440) {
      return { baseWidth: 2560, baseHeight: 1440 };  // 2K
  } else if (width >= 1920 || height >= 1080) {
      return { baseWidth: 1920, baseHeight: 1080 };  // 1080p
  } else {
      return { baseWidth: 1280, baseHeight: 720 };   // 最低 720p
  }
};

// 获取 Windows 缩放比例（125%、150%、200%）
const getSystemScale = () => {
  return window.visualViewport?.scale || (window.outerWidth / window.innerWidth) || 1;
};

// 计算最终缩放比例
export const getScale = () => {
  const dpr = window.devicePixelRatio || 1;
  const systemScale = getSystemScale();

  const screenWidth = window.visualViewport?.width || window.innerWidth;
  const screenHeight = window.visualViewport?.height || window.innerHeight;

  const { baseWidth, baseHeight } = getBaseResolution();

  // 计算缩放比例，并确保 UI 不会超出屏幕
  const widthScale = screenWidth / (baseWidth * (dpr / systemScale));
  const heightScale = screenHeight / (baseHeight * (dpr / systemScale));

  return Math.min(widthScale, heightScale, 1);
};

// 初始化缩放
export const initScale = () => {
  const app = document.getElementById('app');
  if (!app) return;

  const scale = getScale();
  const { baseWidth, baseHeight } = getBaseResolution();

  // 计算居中偏移量，确保 **始终居中**
  const viewportWidth = window.visualViewport?.width || window.innerWidth;
  const viewportHeight = window.visualViewport?.height || window.innerHeight;

  const offsetX = (viewportWidth - baseWidth * scale) / 2;
  const offsetY = (viewportHeight - baseHeight * scale) / 2;

  // 应用 transform
  app.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
  app.style.transformOrigin = 'top left'; // 以左上角为基准缩放
  app.style.position = "absolute";
  app.style.left = "0";
  app.style.top = "0";

  // 让 `app` 充满整个窗口
  app.style.width = `${baseWidth}px`;
  app.style.height = `${baseHeight}px`;
  app.style.backgroundSize = "cover";
};

// 防抖函数（避免窗口缩放频繁触发）
const debounce = (fn, delay = 100) => {
  let timer = null;
  return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
          fn.apply(this, args);
      }, delay);
  };
};

// 监听窗口变化，动态适配
export const screenAdapter = () => {
  const debouncedResize = debounce(() => {
      initScale();
  }, 100);

  window.addEventListener("resize", debouncedResize);
  window.addEventListener("load", initScale);

  return () => {
      window.removeEventListener("resize", debouncedResize);
  };
};
