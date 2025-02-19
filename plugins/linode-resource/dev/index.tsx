import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { linodeResourcePlugin, LinodeResourcePage } from '../src/plugin';

createDevApp()
  .registerPlugin(linodeResourcePlugin)
  .addPage({
    element: <LinodeResourcePage />,
    title: 'Root Page',
    path: '/linode-resource',
  })
  .render();
