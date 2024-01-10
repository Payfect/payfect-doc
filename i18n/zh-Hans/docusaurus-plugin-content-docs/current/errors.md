---
sidebar_position: 3
---

# 錯誤代碼（Errors）

Payfect 采用标准的 HTTP 响应狀態代碼来表示 API 请求是成功还是失败。一般来说：`2xx` 范围的狀態代碼表示请求成功。`4xx` 范围的狀態代碼表示由于提供的信息不足或错误（例如缺少必需的参数、交易失败等）而导致的错误。`5xx` 范围内的狀態代碼表明 Payfect 的服务器出现问题，这种情况并不常见。

| Status Code | Meaning |
|-------------|---------|
| 200 | OK - The request was successful. |
| 400 | Bad Request - The request could not be understood or was missing required parameters. |
| 401 | Unauthorized - Authentication failed or was not provided. |
| 403 | Forbidden - Authentication succeeded but the authenticated user does not have access to the requested resource. |
| 5xx | Server Error - An error occurred on Payfect server. |
