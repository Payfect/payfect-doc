---
sidebar_position: 3
---

# Errors

Payfect adopts standard HTTP response codes to signal whether an API request has succeeded or failed. Generally speaking: `2xx` range codes show a successful request. `4xx` range codes denote an error due to insufficient or incorrect information provided (such as missing a required parameter, a failed transaction, etc.). Codes within the `5xx` range suggest a problem with Payfect's servers, which is not a common occurrence.

| Status Code | Meaning |
|-------------|---------|
| 200 | OK - The request was successful. |
| 400 | Bad Request - The request could not be understood or was missing required parameters. |
| 401 | Unauthorized - Authentication failed or was not provided. |
| 403 | Forbidden - Authentication succeeded but the authenticated user does not have access to the requested resource. |
| 5xx | Server Error - An error occurred on Payfect server. |
