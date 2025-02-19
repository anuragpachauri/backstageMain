# Azure Resource Plugin

Welcome to the **Azure Resource Plugin**!

_This plugin was created through the Backstage CLI._

---

![Alt text](https://i.ibb.co/3FPzKLx/Screenshot-from-2025-01-16-14-08-18.png 'title image')

## Features

- View **Azure resources** associated with a specific component in Backstage.
- Filter resources by **tags** defined in the `catalog-info.yaml`.

---

## Limitations

- Supports Azure resources queried through the **Azure Resource Graph API**.
- Requires **tags** to be defined in the `catalog-info.yaml` for filtering.

---

## Setup

### Installation and Configuration

To set up the Azure Resource Plugin in your Backstage instance, follow these steps:

#### 1. Install the Plugin

Run the following command in the app directory of your Backstage project:

```bash
yarn --cwd packages/app add @anuragpachauri/azure-resource
```

### Configuration

#### 1. Backend Configuration

Ensure the backend plugin for Azure resources is configured to query resources using the Azure Resource Graph API.

https://github.com/anuragpachauri/backstageMain/tree/main/plugins/azure-backend

Refer to the backend plugin documentation for detailed setup instructions.

#### 2. Frontend Configuration

Add the Azure Resource Plugin to your app:

For apps using Backstage's new frontend system

Edit the packages/app/src/components/catalog/EntityPage.tsx file:

```bash
import { AzureResourcePage } from '@anuragpachauri/azure-resource';

const serviceEntityPage = (
  <EntityLayout.Route
    path="/azure-resource"
    title="Azure Resources"
    if={(entity) => !!entity.metadata.annotations?.['azure.com/resource-tag']}
  >
    <AzureResourcePage />
  </EntityLayout.Route>
);
```

Register Components

Add the required annotation to your catalog-info.yaml file:

```bash
apiVersion: backstage.io/v1alpha1
kind: Component
metadata:
  name: your-component
  description: A description of your component
  annotations:
    azure.com/resource-tag: 'your-tag-key:your-tag-value'
spec:
  type: service
  lifecycle: experimental
  owner: your-name

```

After registration, navigate to the component in the Backstage catalog. The associated Azure resources will be displayed based on the specified tags.

Future Enhancements
Support for additional Azure services beyond those accessible via the Resource Graph API.

Enhanced filtering and sorting capabilities.
Feedback

Feel free to suggest changes or report issues by creating a GitHub issue.
