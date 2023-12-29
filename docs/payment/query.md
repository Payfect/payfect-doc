---
sidebar_position: 2
---

# Query a Checkout

To query a checkout with the Payfect API, you need to make a `GET` request to the `/checkouts/{id}/` endpoint, where `{id}` is the unique identifier of the checkout session you wish to query.

## Endpoint

`GET /checkouts/{id}/`

## URL Parameters

| Parameter Name | Type   | Required | Description                  |
|----------------|--------|----------|------------------------------|
| id             | String | Yes      | Unique identifier for the checkout session to be queried. |

## Response Structure

The response for the `Query a Checkout` API call will return a JSON object containing details of the requested checkout session. Below is a detailed description of each field in the response:

| Field Name                   | Type    | Description |
|------------------------------|---------|-------------|
| id                           | String  | Unique identifier for the checkout session. |
| merchant                     | Object  | Contains merchant's `id` and `name`. |
| nameCollection               | Boolean | Indicates if the customer name is collected. |
| emailCollection              | Boolean | Indicates if the customer email is collected. |
| phoneNumberCollection        | Boolean | Indicates if the customer phone number is collected. |
| shippingAddressCollection    | Object  | Details of the shipping address collection. |
| invoiceItems                 | Array   | Array of invoice items included in the checkout. Each item contains `id`, `price`, `priceData`, `quantity` and `amount`. |
| amountTotal                  | String  | Total amount of the checkout session. |
| status                       | String  | Current status of the checkout session. [See Status Values](#status-values) below for more details. |
| createdAt                    | String  | Timestamp of session creation. |
| updatedAt                    | String  | Timestamp of the last update. |
| clientReferenceId            | String  | Client reference ID if provided. |
| currency                     | String  | Currency code of the session (e.g., 'usdt'). |
| successUrl                   | String  | URL to redirect to on success. |
| cancelUrl                    | String  | URL to redirect to on cancel. |
| expiresAt                    | String  | Expiration timestamp for the session. |
| paymentIntent                | String  | Unique identifier for the payment intent. |
| paymentMethodTypes           | Array   | List of available payment method types (e.g., 'crypto', 'card'). |
| paymentMethodOptions         | Object  | Options available for the payment methods. |
| url                          | String  | URL of the checkout session. |
| metadata                     | Object  | Additional metadata related to the checkout. |
| isLivemode                   | Boolean | Indicates if the session is in live mode. |

<a id="status-values"></a>

### Status Values

The `status` field in the response indicates the current state of the checkout session. Possible values include:

- `open`: The session is currently open and awaiting completion.
- `complete`: The session has been successfully completed.
- `expired`: The session has expired and is no longer valid.

## Example Response

```json
{
  "id": "ed8d24aa-a860-426b-8e56-87cb9f55a081",
  "merchant": {
    "id": "bf065cc8-343d-4419-be7d-ed2190f1df4d",
    "name": "頑碼資訊有限公司"
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
  "clientReferenceId": "5ae50223-e455-4a72-a48d-fe7d85800e64",
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
curl -X GET "https://api.payfect.finance/api/v1/checkouts/ed8d24aa-a860-426b-8e56-87cb9f55a081/" \
     -H "Authorization: Api-Key 5a31f3a4-279c-11ee-be56-0242ac120002"
```
  </TabItem>

  <TabItem value="python" label="Python">

```python
import requests

api_key = '5a31f3a4-279c-11ee-be56-0242ac120002'
checkout_id = 'ed8d24aa-a860-426b-8e56-87cb9f55a081'
api_url = f'https://api.payfect.finance/api/v1/checkouts/{checkout_id}/'

headers = {
    'Authorization': f'Api-Key {api_key}'
}

response = requests.get(api_url, headers=headers)
print(response.json())
```

  </TabItem>

</Tabs>
