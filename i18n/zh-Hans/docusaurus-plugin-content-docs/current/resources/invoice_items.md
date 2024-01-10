---
sidebar_position: 3
---

# 发票项目（Invoice Items）

发票项目是构成发票的各个部分。当您使用发票字段创建或更新发票时，您会向发票中添加一个项目，然后它就成为发票中的一个行项目，包含在发票的行中。

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| invoice_items             | Array   | Yes      | List of invoice items.     |
| invoice_items[].price     | String  | Yes      | ID of [Price](prices.md)           |
| invoice_items[].quantity  | Integer | Yes      | Quantity of items.         |
