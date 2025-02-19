
import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';
import { rootRouteRef } from './routes';

export const jiraHomePlugin = createPlugin({
  id: 'jira-home',
  routes: {
    root: rootRouteRef,
  },
});

export const JiraAssigntoMe = jiraHomePlugin.provide(
  createRoutableExtension({
    name: 'JiraAssigntoMe',
    component: () =>
      import('./components/ExampleComponent').then(m => m.JiraAssigntoMe),
    mountPoint: rootRouteRef,
  }),
);
