---
sidebar_position: 3
---

# 發票項目（Invoice Items）

發票項目是構成發票的各個部分。當您使用發票字段創建或更新發票時，您會向發票中添加一個項目，然後它就成為發票中的一個行項目，包含在發票的行中。

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| invoice_items             | Array   | Yes      | List of invoice items.     |
| invoice_items[].price     | String  | Yes      | ID of [Price](prices.md)           |
| invoice_items[].quantity  | Integer | Yes      | Quantity of items.         |
