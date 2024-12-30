## 環境參數env

在根目錄 (與app.vue同層) 建立「.env」檔案

```
// .env file
// 一定要使用「NUXT_」開頭，並且與runtimeconfig對應
// 範例內容
NUXT_PUBLIC_GOOGLE_CLIENT_ID=""
NUXT_PUBLIC_API_BASE=
```

## 快速複製模板

使用 `degit` 工具

1.安裝 `degit`：

```bash
npm install -g degit
```

2.使用模板創建新專案：

```bash
degit yourname/nuxt3-template my-new-project
cd my-new-project
npm install
npm run dev
```
