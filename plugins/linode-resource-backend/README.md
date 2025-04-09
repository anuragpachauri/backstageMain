# Linode Resource Backend Plugin

Welcome to the **Linode Resource backend Plugin**!

_This plugin was created through the Backstage CLI._

---

## Features

- it sends a Api request to Linode Server to fetch the resource Details

---

## Limitations

- Supports only linode resources **linode Resource Graph API**.

---

## Setup

### Installation and Configuration

To set up the linode Resource backend Plugin in your Backstage instance, follow these steps:

#### 1. Install the Plugin

Run the following command in the backend directory of your Backstage project:

```bash
yarn --cwd packages/app add @anuragpachauri/linode-resource-backend
```

### Configuration

#### 1. add these line in packages/backend/src/index.ts

```bash
backend.add(import('@anuragpachauri/linode-resource-backend'))
```
#### 2. add configuration in app-config.yaml

```bash

linode:
  baseUrl: https://api.linode.com/v4
  apiKey: ${LINODE_API_KEY}
  
```

After registration, add the linode resource plugin to Configure Front-end
https://github.com/anuragpachauri/backstageMain/tree/main/plugins/linode-resource

Future Enhancements
Support for additional linode services beyond those accessible via the Resource Graph API.

Enhanced filtering and sorting capabilities.
Feedback

Feel free to suggest changes or report issues by creating a GitHub issue.
