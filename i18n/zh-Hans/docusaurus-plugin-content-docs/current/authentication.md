---
sidebar_position: 2
---

# 認證（Authentication）

Payfect 的 API 使用 API 密钥来认证请求。这些密钥可以通过 Payfect 仪表板进行管理和查看。

请记住，您的 API 密钥具有重要的访问权限，因此它们的安全性至关重要。避免在 GitHub 或客户端代码这样的公开场合分享它们。

要认证您的 API 请求，您可以在 Python 中使用 requests 库搭配 HTTP 认证。在您的请求头中包含您的 API 密钥。

请注意，所有 API 请求都应通过 HTTPS 发送。通过 HTTP 发送的请求或没有认证的请求将被拒绝。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="http" label="Http" default>

```yaml
Host: api.payfect.finance
Authorization: Api-Key 5a31f3a4-279c-11ee-be56-0242ac120002
```

  </TabItem>

  <TabItem value="python" label="Python" default>

```python
import requests

url = 'https://api.payfect.finance/api/v1/some_endpoint'
headers = {
    'Authorization': 'Api-Key 5a31f3a4-279c-11ee-be56-0242ac120002'
}

response = requests.get(url, headers=headers)
print(response.text)
```

  </TabItem>
</Tabs>
