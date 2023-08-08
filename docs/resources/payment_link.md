---
sidebar_position: 4
---

# Payment Link

A payment link is a reusable URL directing customers to a pre-arranged payment page. This link can be shared and repeatedly used.

When a customer uses a payment link, it initiates a new checkout session, displaying the payment interface. You can monitor payments via payment links using checkout session events.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python" default>

```python
payment_link = payfect.PaymentLink.create(
    name_collection=True,
    email_collection=True,
    phone_number_collection=True,
    shipping_address_collection=['TW'],
    invoice_items=[{
        "price": price_id,
        "quantity": 1
    }]
)

print(payment_link['url'])
```

  </TabItem>
</Tabs>
