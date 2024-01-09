---
sidebar_position: 2
---

# 認證（Authentication）

Payfect 的 API 使用 API 密鑰來認證請求。這些密鑰可以通過 Payfect 儀表板進行管理和查看。

請記住，您的 API 密鑰具有重要的訪問權限，因此它們的安全性至關重要。避免在 GitHub 或客戶端代碼這樣的公開場合分享它們。

要認證您的 API 請求，您可以在 Python 中使用 requests 庫搭配 HTTP 認證。在您的請求頭中包含您的 API 密鑰。

請注意，所有 API 請求都應通過 HTTPS 發送。通過 HTTP 發送的請求或沒有認證的請求將被拒絕。

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
