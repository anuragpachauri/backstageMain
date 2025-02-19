import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { jiraHomePlugin, JiraAssigntoMe } from '../src/plugin';

createDevApp()
  .registerPlugin(jiraHomePlugin)
  .addPage({
    element: <JiraAssigntoMe />,
    title: 'Root Page',
    path: '/jira-home',
  })
  .render();
