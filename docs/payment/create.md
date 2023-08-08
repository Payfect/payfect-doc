---
sidebar_position: 2
---

# Create a Checkout

To create a checkout with the Payfect API, you will need to make a `POST` request to the `/checkouts` endpoint. In this request, you will need to include all relevant checkout information, such as the **client reference id**, **currency**, and the **invoice items**.

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| client_reference_id                  | String  | No      | Client reference id.      |
| currency                  | String  | Yes      | Currency code (usdt).      |
| invoice_items             | Array   | Yes      | List of [invoice items](../resources/invoice_items.md).     |
| success_url               | String  | No      | URL to redirect on success.|
| cancel_url                | String  | No      | URL to redirect on cancel. |

## Example Request Body

```json
{
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
    "cancel_url": "https://example.com/cancel"
}
```

## Response

```json
{
  "id": "ed8d24aa-a860-426b-8e56-87cb9f55a081",
  "merchant": {
    "id": "bf065cc8-343d-4419-be7d-ed2190f1df4d",
    "name": "頑碼資訊有限公司3"
  },
  "nameCollection": false,
  "emailCollection": false,
  "phoneNumberCollection": false,
  "shippingAddressCollection": null,
  "invoiceItems": [
    {
      "id": "ee05d205-e4cc-42bd-8897-03c92674c57a",
      "price": "3bababfe-5ba8-4afb-84ca-d62c6933704b",
      "priceData": {
        "id": "3bababfe-5ba8-4afb-84ca-d62c6933704b",
        "product": "c1c1510d-afa8-40af-a47e-5b0f89316995",
        "productData": {
          "id": "c1c1510d-afa8-40af-a47e-5b0f89316995",
          "name": "Standard Plan",
          "description": null,
          "images": []
        },
        "currency": "usdt",
        "unitAmount": "20.00"
      },
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
  "expiresAt": "2023-07-29T08:14:32.288761Z",
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

  <TabItem value="python" label="Python" default>

```python
import payfect
payfect.api_key = '5a31f3a4-279c-11ee-be56-0242ac120002'

checkout_item = payfect.Checkout.create(
    client_reference_id=order_id,
    currency='usdt',
    invoice_items=[{
        'price_data': {
            'currency': 'usdt',
            'product_data': {
                'name': 'Standard Plan',
            },
            'unit_amount': "20.5",
        }
        'quantity': 1
    }],
    success_url='https://example.com/success',
    cancel_url='https://example.com/cancel',,
)

print(checkout_item['url'])
```

  </TabItem>

</Tabs>
