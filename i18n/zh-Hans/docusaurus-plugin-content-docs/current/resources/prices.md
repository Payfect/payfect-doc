---
sidebar_position: 2
---

# 價格（Prices）

价格决定了每单位的成本和使用的货币。产品有助于跟踪库存或供应情况，而价格则帮助您管理支付条件。不同的物品或服务等级应该显示为不同的产品，而这些的不同成本选项应该由不同的价格表示。这种方法允许您在不改变管理供应方式的情况下调整价格。

例如，您可能有一个`产品A`，它有不同的价格选项：`10000 USDT`、`10 ETH` 或 `0.3 BTC`。

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| product| String | Yes | ID of [Product](products.md). |
| currency| String | Yes | Currency code (usdt). |
| unit_amount| String | Yes | Unit price of the product. |
