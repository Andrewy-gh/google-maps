import { useEffect, useState, useRef } from 'react';
import { AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import { MarkerClusterer, type Marker } from '@googlemaps/markerclusterer';

type Point = google.maps.LatLngLiteral & { key: string };
type Props = { points: Point[] };

export default function TreeMarkers({ points }: Props) {
  const map = useMap();
  // object with key "string", value is Marker
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  // reference to cluster, no need for re-render so no need for state
  const clusterer = useRef<MarkerClusterer | null>(null);

  useEffect(() => {
    if (!map) return;
    // if clusterer not set up, set it up
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // whenever markers change, cluster them all together
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  // pass cluster to state
  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;
    setMarkers((prev) => {
      if (marker) {
        return {
          ...prev,
          [key]: marker,
        };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {points.map((point) => (
        <AdvancedMarker
          position={point}
          key={point.key}
          ref={(marker) => setMarkerRef(marker, point.key)}
        >
          <span className="text-3xl">🌳</span>
        </AdvancedMarker>
      ))}
    </>
  );
}
