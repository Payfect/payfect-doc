---
sidebar_position: 2
---

# Price

Prices determine the cost per unit, the currency used. Products are useful for keeping track of stock or supplies, and prices help you manage payment conditions. Different items or service tiers should be shown as different products, and the different cost options for these should be represented by different prices. This method allows you to adjust prices without altering how you manage your supplies.

For instance, you might have a "Product A" product which has various price options: 10000 USDT, 10 ETH or 0.3 BTC.

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| product| String | Yes | ID of [Product](products.md). |
| currency| String | Yes | Currency code (usdt). |
| unit_amount| String | Yes | Unit price of the product. |
