import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';


export const linodeResourcePlugin = createPlugin({
  id: 'linode-resource',
  routes: {
    root: rootRouteRef,
  },
});

export const LinodeResourcePage = linodeResourcePlugin.provide(
  createRoutableExtension({
    name: 'LinodeResourcePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.LinodeResourceList),
    mountPoint: rootRouteRef,
  }),
);
