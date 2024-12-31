export default async function useClientFetch(endpoint, options = {}) {
  const config = useRuntimeConfig()

  const baseURLs = {
    general: config.public.apiBase // 一般 API 的基底網址
  }

  // 使用 general 作為唯一的 Base URL
  const baseURL = baseURLs[options.apiType] || baseURLs.general
  const url = `${baseURL}${endpoint}`

  // 預設的攔截器
  const defaultInterceptors = {
    onRequest({ options }) {
      options.headers = {
        ...(options.headers || {})
        // Authorization: `Bearer ${config.public.apiToken || ''}` // 添加認證頭
      }
      console.log('預設請求邏輯')
    },
    onRequestError({ error }) {
      console.error('預設請求錯誤邏輯:', error)
    },
    onResponse({ response }) {
      console.log('預設回應邏輯:', response)
    },
    onResponseError({ response }) {
      if (response?.status === 401) {
        console.error('未授權！重導向至登入頁...')
      }
      console.error('預設回應錯誤邏輯:', response?.status)
    }
  }

  // 合併自定義攔截器與預設攔截器
  const finalOptions = {
    ...options, // 展開自定義選項
    onRequest(context) {
      defaultInterceptors.onRequest(context) // 執行預設邏輯
      options.onRequest?.(context) // 執行自定義邏輯
    },
    onRequestError(context) {
      defaultInterceptors.onRequestError(context)
      options.onRequestError?.(context)
    },
    onResponse(context) {
      defaultInterceptors.onResponse(context)
      options.onResponse?.(context)
    },
    onResponseError(context) {
      defaultInterceptors.onResponseError(context)
      options.onResponseError?.(context)
    }
  }

  // 使用 useFetch 發送請求，等待 Promise 完成
  const result = await useFetch(url, finalOptions)

  // 返回完整的 useFetch 結果 { data, status, error, refresh, clear }
  return result
}
