import React, { useEffect, useState } from 'react';
import { useApi , configApiRef } from '@backstage/core-plugin-api';
import { identityApiRef } from '@backstage/core-plugin-api';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  CircularProgress,
} from '@material-ui/core';



// Define interfaces for Linode Instances and Volumes
interface LinodeInstance {
  id: string;
  label: string;
  status: string;
  region: string;
  ipv4: string[];
  image: string;
  created: string;
}

interface LinodeVolume {
  id: string;
  label: string;
  region: string;
  size: number;
  status: string;
  created: string;
}

// LinodeResourceList component
export const LinodeResourceList = () => {
  const identityApi = useApi(identityApiRef);
  const [instances, setInstances] = useState<LinodeInstance[]>([]);
  const [volumes, setVolumes] = useState<LinodeVolume[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const configApi = useApi(configApiRef);
  const backendUrl = configApi.getString('backend.baseUrl');
  
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const { token } = await identityApi.getCredentials(); // Get the Backstage token (if needed)

        // Fetch Instances
       

        const instancesResponse = await fetch(`${backendUrl}/api/linode-resource/instances`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!instancesResponse.ok) {
          throw new Error(`Failed to fetch instances: ${instancesResponse.statusText}`);
        }

        const instancesData = await instancesResponse.json();
        setInstances(instancesData.data);

        // Fetch Volumes
        const volumesResponse = await fetch(`${backendUrl}/api/linode-resource/instances`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!volumesResponse.ok) {
          throw new Error(`Failed to fetch volumes: ${volumesResponse.statusText}`);
        }

        const volumesData = await volumesResponse.json();
        setVolumes(volumesData.data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, [identityApi]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ border: '1px solid #333', borderRadius: '8px', padding: '16px', backgroundColor: '#2b2b2b', maxWidth: '800px', margin: '0 auto' }}>
      <Typography variant="h4" style={{ textAlign: 'center', marginBottom: '16px', color: '#fff' }}>Linode Resources</Typography>
      <Card style={{ height: '100%', minHeight: '300px', border: '1px solid #333', borderRadius: '8px', backgroundColor: '#424242', color: '#fff' }}>
        <CardContent style={{ height: '100%' }}>
          <Typography variant="h6">Linode Instances ({instances.length})</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>IPv4</TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {instances.map((instance) => (
                <TableRow key={instance.id}>
                  <TableCell>{instance.label}</TableCell>
                  <TableCell>{instance.region}</TableCell>
                  <TableCell>{instance.status}</TableCell>
                  <TableCell>{instance.ipv4.join(', ')}</TableCell>
                  <TableCell>{instance.image}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Typography variant="h6" style={{ marginTop: '20px' }}>Linode Volumes ({volumes.length})</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Size (GB)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Created</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {volumes.map((volume) => (
                <TableRow key={volume.id}>
                  <TableCell>{volume.label}</TableCell>
                  <TableCell>{volume.region}</TableCell>
                  <TableCell>{volume.size} GB</TableCell>
                  <TableCell>{volume.status}</TableCell>
                  <TableCell>{new Date(volume.created).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
