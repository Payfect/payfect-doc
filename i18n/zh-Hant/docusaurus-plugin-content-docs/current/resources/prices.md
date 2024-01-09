---
sidebar_position: 2
---

# 價格（Prices）

價格決定了每單位的成本和使用的貨幣。產品有助於跟蹤庫存或供應情況，而價格則幫助您管理支付條件。不同的物品或服務等級應該顯示為不同的產品，而這些的不同成本選項應該由不同的價格表示。這種方法允許您在不改變管理供應方式的情況下調整價格。

例如，您可能有一個`產品A`，它有不同的價格選項：`10000 USDT`、`10 ETH` 或 `0.3 BTC`。

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| product| String | Yes | ID of [Product](products.md). |
| currency| String | Yes | Currency code (usdt). |
| unit_amount| String | Yes | Unit price of the product. |
