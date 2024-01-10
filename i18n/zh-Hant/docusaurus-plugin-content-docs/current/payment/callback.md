---
sidebar_position: 3
---

# 結帳成功的回調

在結帳成功後，Payfect API 將觸發一個回調到指定的 URL。這個回調將使用帶有 JSON 數據的 POST 請求。

## 回調 URL

回調 URL 的確定方式如下：

- 如果在 `Create a Checkout` 請求期間提供了一個 `callback_url`，那麼將使用該 URL。
- 如果在創建結帳時沒有提供 `callback_url`，將使用在[儀表板網站 webhook 頁面](https://dashboard.payfect.finance/test/developer/webhooks)設置的默認回調 URL。

## 請求標頭

回調請求將包含一個名為 `X-Payfect-Signature` 的標頭。這個標頭包含回調數據的加密值。該值出於安全目的進行加密，並應在客戶端解密。

## 解密簽名

可以使用以下函數解密 `X-Payfect-Signature` 標頭中的簽名：

```python
from cryptography.fernet import Fernet
import json

def decrypt_signature(signature, secret_key):
    fernet = Fernet(secret_key.encode('utf-8'))
    return json.loads(fernet.decrypt(signature.encode('utf-8')).decode('utf-8'))
```

## 驗證解密後的數據

在解密簽名後，驗證解密後的數據與原始 POST 請求體中的數據是否匹配至關重要。如果存在差異，可能表明 API 數據已被篡改。在這種情況下，應採取適當措施處理潛在的安全漏洞。

## 回調 Payload

以下為回調 payload 的格式：

```json
{
  "id": "ed8d24aa-a860-426b-8e56-87cb9f55a081",
  "amount": "20.00",
  "status": "succeeded",
  "currency": "usdt",
  "merchant": "bf065cc8-343d-4419-be7d-ed2190f1df4d",
  "is_livemode": false,
  "payment_intent": "b7c30e83-5439-47b2-ac4d-81c64c1d0174",
  "payment_method": {
    "id": "74fa9095-b553-4607-b282-70ef7597a2e8",
    "payment_method_detail": {
      "network": "tron",
      "currency": "usdt"
    }
  },
  "client_reference_id": "5ae50223-e455-4a72-a48d-fe7d85800e64"
}
```
