---
sidebar_position: 2
---

# Authentication

Payfect's API uses API keys  to authenticate requests. These keys can be managed and viewed via the Payfect Dashboard.

Remember, your API keys have important access rights, hence their safety is paramount. Avoid sharing them in open spaces like GitHub or client-side code.

To authenticate your API requests, you have two options: you can either use HTTP authentication or assign your API key directly within the library using `payfect.api_key`.

For HTTP authentication, use `-H "Authorization: Api-Key 5a31f3a4-279c-11ee-be56-0242ac120002"`.

Alternatively, you can assign your API key to `payfect.api_key` within the library. This method ensures that the key is automatically included in every API request.

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
import payfect
payfect.api_key = '5a31f3a4-279c-11ee-be56-0242ac120002'
```

  </TabItem>

</Tabs>
