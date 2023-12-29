---
sidebar_position: 2
---

# Authentication

Payfect's API uses API keys  to authenticate requests. These keys can be managed and viewed via the Payfect Dashboard.

Remember, your API keys have important access rights, hence their safety is paramount. Avoid sharing them in open spaces like GitHub or client-side code.

To authenticate your API requests, you can use HTTP authentication with the requests library in Python. Include your API key in the header of your requests.

Note that all API requests should be sent via HTTPS. Requests sent over HTTP or without authentication will be rejected.

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
