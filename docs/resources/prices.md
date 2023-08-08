---
sidebar_position: 2
---

# Price

Prices determine the cost per unit, the currency used. Products are useful for keeping track of stock or supplies, and prices help you manage payment conditions. Different items or service tiers should be shown as different products, and the different cost options for these should be represented by different prices. This method allows you to adjust prices without altering how you manage your supplies.

For instance, you might have a "Product A" product which has various price options: 10000 USDT, 10 ETH or 0.3 BTC.

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| product| String | Yes | ID of [Product](product.md). |
| currency| String | Yes | Currency code (usdt). |
| unit_amount| String | Yes | Unit price of the product. |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python" default>

```python
import payfect
payfect.api_key = 'Tan2glfr.YFigW4Xx37Lbj6d4x6iXtw7pzUaNTHKk'

# Create price with product id
price_item = payfect.Price.create(
    product='33b71460-2d24-11ee-be56-0242ac120002',
    currency='usdt',
    unit_amount='100.5',
)

# Create price with product data
price_item = payfect.Price.create(
    product_data={
        'name': 'Product A',
        'description': 'A very nice product.',
    }
    currency='usdt',
    unit_amount='100.5',
)

print(price_item['id'])
```

  </TabItem>
</Tabs>
