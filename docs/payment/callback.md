---
sidebar_position: 3
---

# Callback for Checkout Success

After a successful checkout session, Payfect API will trigger a callback to the specified URL. This callback will use a POST request with JSON data.

## Callback URL

The callback URL is determined as follows:
- If a `callback_url` is provided during the `Create a Checkout` request, that URL will be used.
- If no `callback_url` is provided at checkout creation, the default callback URL set in the backend website will be used.

## Request Header

The callback request will contain a header named `X-Payfect-Signature`. This header includes the encrypted value of the callback data. The value is encrypted for security purposes and should be decrypted on the client side.

## Decrypting the Signature

The signature in the `X-Payfect-Signature` header can be decrypted using the following function:

```python
from cryptography.fernet import Fernet
import json

def decrypt_signature(signature, secret_key):
    fernet = Fernet(secret_key.encode('utf-8'))
    return json.loads(fernet.decrypt(signature.encode('utf-8')).decode('utf-8'))
```

## Callback Payload

After decrypting the signature, the callback payload will be in the following format:

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
