'use client';

import { APIProvider, Map } from '@vis.gl/react-google-maps';
import locations from '../../data/intro';
import LocationMarker from '@/components/intro/LocationMarker';

export default function Intro() {
  // New York City
  const position = { lat: 40.7128, lng: -74.006 };
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className="h-screen w-full">
        <Map zoom={9} center={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          {locations.map((position, index) => (
            <LocationMarker key={index} position={position} />
          ))}
        </Map>
      </div>
    </APIProvider>
  );
}
