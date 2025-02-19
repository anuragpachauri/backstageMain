# Azure Resource Plugin

Welcome to the **Azure Resource Plugin**!

_This plugin was created through the Backstage CLI._

---


## Features

- View **jira home** associated with a specific component in Backstage.

---



---

## Setup

### Installation and Configuration

To set up the jira home Plugin in your Backstage instance, follow these steps:

#### 1. Install the Plugin

Run the following command in the app directory of your Backstage project:

```bash
yarn --cwd packages/app add @anuragpachauri/jira-home
```

### Configuration

#### 1. Backend Configuration

Ensure the backend plugin for jira home is configured to query resources.

https://github.com/anuragpachauri/jira-home-backend

Refer to the backend plugin documentation for detailed setup instructions.

#### 2. Frontend Configuration

Add the jira home Plugin to your app:

For apps using Backstage's new frontend system

Edit the packages/app/src/components/home/homepage.tsx file:

```bash
import { JiraAssigntoMe } from '@internal/backstage-plugin-jira-home';

<div
        style={{
          display: 'flex',
          justifyContent: 'flex-start', // Ensures the JiraDashboard is aligned to the left
          alignItems: 'flex-start',
          textAlign: 'left', // Aligns text to the left as well
        }}
      >
        <JiraAssigntoMe />
      </div>
```

After registration, navigate to the component in the Backstage catalog. The associated Azure resources will be displayed based on the specified tags.

Future Enhancements
Support for additional Azure services beyond those accessible via the Resource Graph API.

Enhanced filtering and sorting capabilities.
Feedback

Feel free to suggest changes or report issues by creating a GitHub issue.
