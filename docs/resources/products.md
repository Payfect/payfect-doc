---
sidebar_position: 1
---

# Products

Products refer to the unique items or services you provide to your customers. For instance, if you offer Standard and Premium versions of your service, each would be an individual Product. These Products, paired with Prices, help define cost in Payment Links, Checkout.

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| name| String | Yes | Name of the product. |
| description| String | No | Description of the product. |
| images| Array | No | Array of image URLs. |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python" default>

```python
import payfect

payfect.api_key = 'Tan2glfr.YFigW4Xx37Lbj6d4x6iXtw7pzUaNTHKk'

product_item = payfect.Product.create(
    name='Product Name',
    description='Product Description',
    images=[
        'Image link',
    ]
)

print(product_item['id'])
```

  </TabItem>
</Tabs>
