import { linodeResourcePlugin } from './plugin';

describe('linode-resource', () => {
  it('should export plugin', () => {
    expect(linodeResourcePlugin).toBeDefined();
  });
});
