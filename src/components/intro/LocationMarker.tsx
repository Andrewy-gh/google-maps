import { useState } from 'react';
import { AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

type Props = { position: google.maps.LatLngLiteral };
export default function LocationMarker({ position }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AdvancedMarker position={position} onClick={() => setOpen(true)}>
        <Pin background={'grey'} borderColor={'green'} glyphColor={'purple'} />
      </AdvancedMarker>
      {open && (
        <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
          <p>I&apos;m in New York</p>
        </InfoWindow>
      )}
    </>
  );
}
