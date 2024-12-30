export default function useImgAssets(path: string = '') {
  // 提取副檔名
  const ext = path.match(/\.[^.]+$/)?.[0]?.slice(1) // 去掉 "."
  if (!ext) return path // 若無副檔名，直接返回路徑

  // 匹配資源的 Glob Pattern
  const assets = import.meta.glob(`~/assets/images/**/*.{svg,png,gif,jpg,jpeg}`, { eager: true })

  // 拼接完整路徑
  const fullpath = `/assets/images/${path}`

  // 若資源不存在，返回原始路徑
  if (!assets[fullpath]) return fullpath

  // 返回資源的真實路徑
  return (assets[fullpath] as Record<string, any>).default
}
