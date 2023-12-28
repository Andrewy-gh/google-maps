'use client';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import Routes from '@/components/directions/Routes';
export default function Directions() {
  const position = { lat: 43.6532, lng: -79.3832 };
  return (
    <div className="h-screen w-full">
      <APIProvider
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}
      >
        <Map
          center={position}
          zoom={9}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          fullscreenControl={false}
        >
          <Routes />
        </Map>
      </APIProvider>
    </div>
  );
}
