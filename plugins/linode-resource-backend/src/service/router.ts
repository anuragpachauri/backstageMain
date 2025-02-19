import { MiddlewareFactory } from '@backstage/backend-defaults/rootHttpRouter';
import { LoggerService, RootConfigService } from '@backstage/backend-plugin-api';
import express from 'express';
import Router from 'express-promise-router';
import axios, {  } from 'axios';

export interface RouterOptions {
  logger: LoggerService;
  config: RootConfigService;
}

export async function createRouter(
  options: RouterOptions,
): Promise<express.Router> {
  const { logger, config } = options;

  const router = Router();
  router.use(express.json());

  // Get API Key from environment
  const linodeApiKey = process.env.LINODE_API_KEY;

  if (!linodeApiKey) {
    logger.error('Linode API key is missing. Please set it in the environment variables.');
    throw new Error('Linode API key not configured.');
  }

  // Function to make Linode API requests
  async function fetchLinodeData(endpoint: string) {
    try {
      const response = await axios.get(`https://api.linode.com/v4/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${linodeApiKey}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error: unknown) {
      // Check if the error is an AxiosError
      if (axios.isAxiosError(error)) {
        logger.error(`Error fetching Linode ${endpoint}: ${error.response?.data || error.message}`);
      } else {
        logger.error(`Unknown error fetching Linode ${endpoint}: ${error}`);
      }
      throw new Error(`Failed to fetch Linode ${endpoint}`);
    }
  }

  // Health Check Endpoint
  router.get('/health', (_, response) => {
    logger.info('PONG!');
    response.json({ status: 'ok' });
  });

  // Fetch Linode Instances
  router.get('/instances', async (_, res) => {
    try {
      const instances = await fetchLinodeData('linode/instances');
      res.json(instances);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch Linode instances' });
    }
  });

  // Fetch Linode Volumes
  router.get('/volumes', async (_, res) => {
    try {
      const volumes = await fetchLinodeData('volumes');
      res.json(volumes);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch Linode volumes' });
    }
  });

  const middleware = MiddlewareFactory.create({ logger, config });
  router.use(middleware.error());

  return router;
}
