import { useState, useEffect, useRef } from 'react';

import { Typography, useTheme, useMediaQuery } from '@mui/material';

import HtmlHead from '@site/components/HtmlHead';
import SitePage from '@site/components/SitePage';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mapboxgl from '!mapbox-gl';
import { Map as Mapbox } from 'mapbox-gl';

import styles from './Map.module.scss';

const HOMEISH_LOCATION: [number, number] = [-71.1281, 42.3815];

const Map = (): JSX.Element => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZW1tZXR0bW9vcmUiLCJhIjoiY2xtbWRzdnI3MGs0NTJybHR1aTl0NmR4cyJ9.FxrZPXxCw4R3KjKngbL4_w';

  const mapContainer = useRef(null);
  const map = useRef<Mapbox | null>(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

  useEffect(() => {
    if (map.current) {
      return;
    } // initialize map only once
    // Fixed circle radius in meters
    const fixedRadiusMeters = 0.05; // Adjust as needed
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom,
    });

    if (!map.current) {
      return;
    }

    map.current.on('move', () => {
      if (!map.current) {
        return;
      }
      setLng(Number(map.current.getCenter().lng.toFixed(4)));
      setLat(Number(map.current.getCenter().lat.toFixed(4)));
      setZoom(Number(map.current.getZoom().toFixed(2)));
    });

    // // Create a marker for the Paul Revere house
    // const homeIsh = new Marker()
    //   .setLngLat(HOMEISH_LOCATION) // Replace with the coordinates of the Paul Revere house
    //   .addTo(map.current);

    // Add a circle marker
    new mapboxgl.Marker({
      color: theme.palette.primary.light,
    })
      .setLngLat(HOMEISH_LOCATION)
      .addTo(map.current);

    // Add a transparent circle overlay
    map.current.on(`load` as any, (): void => {
      if (!map.current) {
        return;
      }
      map.current.addSource('host-location', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: HOMEISH_LOCATION,
          },
        },
      });
      map.current.addLayer({
        id: 'host-location-circle',
        type: 'circle',
        source: 'host-location',
        paint: {
          'circle-radius': [
            'interpolate',
            ['exponential', 2], // Adjust the exponent for scaling
            ['zoom'],
            0, // At zoom level 0 (fully zoomed out), use this radius
            fixedRadiusMeters,
            22, // At zoom level 22 (fully zoomed in), use this radius
            fixedRadiusMeters * Math.pow(2, 22),
          ],
          'circle-opacity': 0.3, // Adjust the opacity to make it transparent
          'circle-color': theme.palette.primary.light, // Customize the circle color
        },
      });
    });
  }, [lat, lng, zoom, theme.palette.primary.light]);

  return (
    <>
      <HtmlHead description="Map for Emmett Moore" title="Emmett Moore | Map" />
      <div className={styles.mapWrapper}>
        <div className={styles.sidebar}>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className={styles.mapContainer} />
      </div>
    </>
  );
};

export default Map;
