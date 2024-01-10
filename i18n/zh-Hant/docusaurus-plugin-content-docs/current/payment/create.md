---
sidebar_position: 2
---

# 建立一個結帳

要使用 Payfect API 建立一個結帳，您需要對 `/checkouts` 端點發出一個 `POST` 請求。在這個請求中，您需要包含所有相關的結帳信息，比如**貨幣**和**發票項目**。

## Endpoint

`POST` `/checkouts/`

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| client_reference_id       | String  | No       | Client reference id.      |
| currency                  | String  | Yes      | Currency code (usdt).      |
| invoice_items             | Array   | Yes      | List of [invoice items](../resources/invoice_items.md).     |
| success_url               | String  | No       | URL to redirect on success.|
| cancel_url                | String  | No       | URL to redirect on cancel. |
| callback_url              | String  | No       | URL to send a callback notification upon successful completion of the charge. |
| payment_method_data       | Object  | No       | Data regarding the payment method chosen for the transaction. |

## Example Request Body

```json
{
    "client_reference_id": "5ae50223-e455-4a72-a48d-fe7d85800e64",
    "currency": "usdt",
    "invoice_items": [{
        "price_data": {
            "product_data": {
                "name": "Standard Plan",
                "description": "A standard plan",
                "images": [
                    "https://google.com.tw/images/123"
                ],
            },
            "currency": "usdt",
            "unit_amount": "20.5",
        },
        "quantity": 1,
    }],
    "success_url": "https://example.com/success",
    "cancel_url": "https://example.com/cancel",
    "callback_url": "https://example.com/callback",
    "payment_method_data": {
        "type": "cryptopaymentmethoddetail",
        "paymentMethodDetail": {
            "currency": "usdt",
            "network": "tron"
        }
    }
}
```

## Response Structure

`Create a Checkout` API 調用的響應返回一個包含多個字段的 `JSON` 對象。下面是每個字段的詳細描述：

| Field Name                 | Type    | Description |
|----------------------------|---------|-------------|
| id                         | String  | Unique identifier for the checkout session. |
| merchant                   | Object  | Contains merchant's `id` and `name`. |
| nameCollection             | Boolean | Indicates if the customer name is collected. |
| emailCollection            | Boolean | Indicates if the customer email is collected. |
| phoneNumberCollection      | Boolean | Indicates if the customer phone number is collected. |
| shippingAddressCollection  | Object  | Details of the shipping address collection. |
| invoiceItems               | Array   | Array of invoice items included in the checkout. Each item contains `id`, `price`, `priceData`, `quantity` and `amount`. |
| amountTotal                | String  | Total amount of the checkout session. |
| status                     | String  | Current status of the checkout session. [See Status Values](#status-values) below for more details.  |
| createdAt                  | String  | Timestamp of session creation. |
| updatedAt                  | String  | Timestamp of the last update. |
| clientReferenceId          | String  | Client reference ID if provided. |
| currency                   | String  | Currency code of the session (e.g., 'usdt'). |
| successUrl                 | String  | URL to redirect to on success. |
| cancelUrl                  | String  | URL to redirect to on cancel. |
| expiresAt                  | String  | Expiration timestamp for the session. |
| paymentIntent              | String  | Unique identifier for the payment intent. |
| paymentMethodTypes         | Array   | List of available payment method types (e.g., 'crypto', 'card'). |
| paymentMethodOptions       | Object  | Options available for the payment methods. |
| url                        | String  | URL of the checkout session. |
| metadata                   | Object  | Additional metadata related to the checkout. |
| isLivemode                 | Boolean | Indicates if the session is in live mode. |

<a id="status-values"></a>

### Status Values

響應中的 `status` 字段表示結帳會話的當前狀態。可能的值包括：

- `open`: 結帳當前處於開放狀態，等待完成。
- `complete`: 結帳已成功完成。
- `expired`: 結帳已過期，不再有效。

## Example Response

```json
{
  "id": "ed8d24aa-a860-426b-8e56-87cb9f55a081",
  "merchant": {
    "id": "bf065cc8-343d-4419-be7d-ed2190f1df4d",
    "name": "Payfect Finance"
  },
  "nameCollection": false,
  "emailCollection": false,
  "phoneNumberCollection": false,
  "shippingAddressCollection": null,
  "invoiceItems": [
    {
      "id": "ee05d205-e4cc-42bd-8897-03c92674c57a",
      "price": "3bababfe-5ba8-4afb-84ca-d62c6933704b",
      "quantity": 1,
      "amount": "20.00"
    }
  ],
  "amountTotal": "20.00",
  "status": "open",
  "createdAt": "1690532072.288761",
  "updatedAt": "1690532073.498443",
  "clientReferenceId": null,
  "currency": "usdt",
  "successUrl": "https://example.com/success",
  "cancelUrl": "https://example.com/cancel",
  "expiresAt": "1703939166000",
  "paymentIntent": "b7c30e83-5439-47b2-ac4d-81c64c1d0174",
  "paymentMethodTypes": [
    "crypto",
    "card"
  ],
  "paymentMethodOptions": {
    "crypto": [
      {
        "currency": {
          "value": "usdt",
          "name": "Tether",
          "logo": "/static/images/cryptos/usdt.png"
        },
        "networks": [
          {
            "value": "tron",
            "name": "Tron (TRC20)"
          }
        ]
      }
    ],
    "card": null
  },
  "url": "https://buy-dev.payfect.finance/checkouts/ed8d24aa-a860-426b-8e56-87cb9f55a081",
  "metadata": null,
  "isLivemode": false
}
```

## Example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="curl" label="CURL" default>

```bash
curl -X POST https://api.payfect.finance/api/v1/checkouts/ \
     -H 'Authorization: Api-Key 5a31f3a4-279c-11ee-be56-0242ac120002' \
     -H 'Content-Type: application/json' \
     -d '{
         "client_reference_id": "6befb0e4-e9a0-4151-8999-8b67eae19553",
         "currency": "CNY",
         "invoice_items": [{
             "price_data": {
                 "currency": "TWD",
                 "product_data": {
                     "name": "Standard Plan",
                     "description": "A standard plan",
                     "images": ["https://i.imgur.com/EHyR2nP.png"]
                 },
                 "unit_amount": "20"
             },
             "quantity": 1
         }],
         "success_url": "https://example.com/success",
         "cancel_url": "https://example.com/cancel",
         "callback_url": "https://example.com/callback",
         "payment_method_data": {
             "type": "cryptopaymentmethoddetail",
             "paymentMethodDetail": {
                 "currency": "TWD",
                 "network": "tron"
             }
         }
     }'
```
  </TabItem>

  <TabItem value="python" label="Python">

```python
import requests
import json

api_key = '5a31f3a4-279c-11ee-be56-0242ac120002'
api_url = 'https://api.payfect.finance/api/v1/checkouts/'

headers = {
    'Authorization': f'Api-Key {api_key}',
    'Content-Type': 'application/json'
}

payload = {
    'client_reference_id': '6befb0e4-e9a0-4151-8999-8b67eae19553',
    'currency': 'CNY',
    'invoice_items': [{
        'price_data': {
            'currency': 'TWD',
            'product_data': {
                'name': 'Standard Plan',
                'description': 'A standard plan',
                'images': ['https://i.imgur.com/EHyR2nP.png'],
            },
            'unit_amount': '20',
        },
        'quantity': 1,
    }],
    'success_url': 'https://example.com/success',
    'cancel_url': 'https://example.com/cancel',
    'callback_url': 'https://example.com/callback',
    'payment_method_data': {
        'type': 'cryptopaymentmethoddetail',
        'paymentMethodDetail': {
            'currency': 'TWD',
            'network': 'tron'
        }
    }
}

response = requests.post(api_url, headers=headers, data=json.dumps(payload))
print(response.json()['url'])
```

  </TabItem>

</Tabs>
