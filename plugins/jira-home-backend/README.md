# jira home Backend Plugin

Welcome to the **jira home backend Plugin**!

_This plugin was created through the Backstage CLI._

---

## Features

- it run a query on jira cli to import issue based on user

---

## Limitations

- Supports jira issue assigned to perticular user  **Azure Resource Graph API**.

---

## Setup

### Installation and Configuration

To set up the jira home backend Plugin in your Backstage instance, follow these steps:

#### 1. Install the Plugin

Run the following command in the backend directory of your Backstage project:

```bash
yarn --cwd packages/app add @anuragpachauri/jira-home-backend
```

### Configuration

#### 1. add these line in packages/backend/src/index.ts

```bash
backend.add(import('@anuragpachauri/jira-home-backend'));

```
#### add configuration in app-config.yaml

```bash

jira:
  token: 'Basic JIRATOKEN'
  baseUrl: https://<URL>/rest/api/2/
  projectKey: 'project-key'
  username: 'username'
```


After registration, add the azure resource plugin to Configure Front-end
https://github.com/anuragpachauri/jira-home

Future Enhancements
Support for additional Azure services beyond those accessible via the Resource Graph API.

Enhanced filtering and sorting capabilities.
Feedback

Feel free to suggest changes or report issues by creating a GitHub issue.
