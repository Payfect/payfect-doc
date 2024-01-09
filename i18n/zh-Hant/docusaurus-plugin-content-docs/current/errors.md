---
sidebar_position: 3
---

# 錯誤代碼（Errors）

Payfect 採用標準的 HTTP 響應狀態代碼來表示 API 請求是成功還是失敗。一般來說：`2xx` 範圍的狀態代碼表示請求成功。`4xx` 範圍的狀態代碼表示由於提供的信息不足或錯誤（例如缺少必需的參數、交易失敗等）而導致的錯誤。`5xx` 範圍內的狀態代碼表明 Payfect 的服務器出現問題，這種情況並不常見。

| Status Code | Meaning |
|-------------|---------|
| 200 | OK - The request was successful. |
| 400 | Bad Request - The request could not be understood or was missing required parameters. |
| 401 | Unauthorized - Authentication failed or was not provided. |
| 403 | Forbidden - Authentication succeeded but the authenticated user does not have access to the requested resource. |
| 5xx | Server Error - An error occurred on Payfect server. |
