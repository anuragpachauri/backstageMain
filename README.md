# Backstage Instance with Custom Plugins

This repository contains a Backstage instance with the following custom plugins:

- [Jira Home](./plugins/jira-home)
- [Jira Home Backend](./plugins/jira-home-backend)
- [Azure Backend](./plugins/azure-backend)
- [Azure Resource](./plugins/azure-resource)

## Plugins

### [Jira Home](./plugins/jira-home)
A custom plugin that displays Jira data on the homepage of Backstage.

### [Jira Home Backend](./plugins/jira-home-backend)
Handles Jira API integration to fetch issues and other relevant data for the Jira Home plugin.

### [Azure Backend](./plugins/azure-backend)
Provides integration with Azure to fetch resource data based on tags.

### [Azure Resource](./plugins/azure-resource)
Displays Azure resources on the frontend of Backstage using information retrieved from the Azure Backend plugin.

### [linode Resource](./plugins/azure-resource)
Displays linode resources on the frontend of Backstage using information retrieved from the linode Backend plugin.

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/anuragpachauri/backstageMain
   cd backstageMain
   
2. yarn install and start in dev

   ```bash
   yarn install
   yarn dev
   
3. Run Backstage in Production Mode: 

   ```bash
   yarn install
   yarn tsc
   yarn build all

### Contributing
Feel free to submit issues or pull requests to enhance the functionality of these plugins!
