'use client';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import TreeMarkers from '@/components/markers/TreesMarkers';
import trees from '@/data/trees';

export default function Markers() {
  const position = { lat: 43.64, lng: -79.41 };
  return (
    <div className="h-screen w-full">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <Map center={position} zoom={10} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <TreeMarkers points={trees} />
        </Map>
      </APIProvider>
    </div>
  );
}
