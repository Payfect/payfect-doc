---
sidebar_position: 3
---

# Invoice Items

Invoice Items are the individual parts that make up an invoice. You add an item to an invoice when you create or update it with an invoice field, and then it becomes part of the invoice as a line item within the invoice's lines.

## Fields

| Field Name                | Type    | Required | Description                |
|---------------------------|---------|----------|----------------------------|
| invoice_items             | Array   | Yes      | List of invoice items.     |
| invoice_items[].price     | String  | Yes      | ID of [Price](prices.md)           |
| invoice_items[].quantity  | Integer | Yes      | Quantity of items.         |
