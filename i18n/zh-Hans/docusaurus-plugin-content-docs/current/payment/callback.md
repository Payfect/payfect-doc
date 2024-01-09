---
sidebar_position: 3
---

# 结账成功的回调

在结账成功后，Payfect API 将触发一个回调到指定的 URL。这个回调将使用带有 JSON 数据的 POST 请求。

## 回调 URL

回调 URL 的确定方式如下：

- 如果在 `Create a Checkout` 请求期间提供了一个 `callback_url`，那么将使用该 URL。
- 如果在创建结账时没有提供 `callback_url`，将使用在[仪表板网站 webhook 页面](https://dashboard.payfect.finance/test/developer/webhooks)设置的默认回调 URL。

## 请求标头

回调请求将包含一个名为 `X-Payfect-Signature` 的标头。这个标头包含回调数据的加密值。该值出于安全目的进行加密，并应在客户端解密。

## 解密签名

可以使用以下函数解密 `X-Payfect-Signature` 标头中的签名：

```python
from cryptography.fernet import Fernet
import json

def decrypt_signature(signature, secret_key):
    fernet = Fernet(secret_key.encode('utf-8'))
    return json.loads(fernet.decrypt(signature.encode('utf-8')).decode('utf-8'))
```

## 验证解密后的数据

在解密签名后，验证解密后的数据与原始 POST 请求体中的数据是否匹配至关重要。如果存在差异，可能表明 API 数据已被篡改。在这种情况下，应采取适当措施处理潜在的安全漏洞。

## 回调 Payload

以下为回调 payload 的格式：

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
