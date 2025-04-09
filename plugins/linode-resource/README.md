# linode Resource Plugin

Welcome to the **linode Resource Plugin**!

_This plugin was created through the Backstage CLI._

---

![Alt text](https://i.ibb.co/3FPzKLx/Screenshot-from-2025-01-16-14-08-18.png 'title image')

## Features

- View **linode resources** associated with a specific component in Backstage.

---

## Limitations

- Supports only linode resources **linode Resource Graph API**.

---

## Setup

### Installation and Configuration

To set up the linode Resource Plugin in your Backstage instance, follow these steps:

#### 1. Install the Plugin

Run the following command in the app directory of your Backstage project:

```bash
yarn --cwd packages/app add @anuragpachauri/linode-resource
```

### Configuration

#### 1. Backend Configuration

Ensure the backend plugin for linode resources is configured to query resources using the Azure Resource Graph API.

https://github.com/anuragpachauri/backstageMain/tree/main/plugins/linode-resource-backend

Refer to the backend plugin documentation for detailed setup instructions.

#### 2. Frontend Configuration

Add the linode Resource Plugin to your app:

For apps using Backstage's new frontend system

Edit the packages/app/src/components/catalog/EntityPage.tsx file:

```bash
import { LinodeResourcePage } from '@anuragpachauri/linode-resource';

const serviceEntityPage = (
  <EntityLayout.Route
      path="/linode-resource"
      title="linode Resources"
    >
      <LinodeResourcePage /> 
    </EntityLayout.Route>
);
```


After registration, navigate to the component in the Backstage catalog. The associated linode resources will be displayed based on the specified tags.

Future Enhancements
Support for additional linode services beyond those accessible via API.

Enhanced filtering and sorting capabilities.
Feedback

Feel free to suggest changes or report issues by creating a GitHub issue.
