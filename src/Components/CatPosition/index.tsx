import React, {createRef, useEffect} from 'react';
import {Map, Marker, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {icon, LatLngTuple} from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png'

interface CatPositionProps {
    position: LatLngTuple;
}

const customMarker = icon({
    iconUrl: marker,
    iconSize: [25, 41],
    iconAnchor: [13, 0]
});

const styles = {
    map: {
        width: '600px',
        height: '600px'
    }
}

export default function CatPosition({position}: CatPositionProps) {
    const ref = createRef<any>();

    useEffect(() => {
        setTimeout(() => {
            ref.current?.leafletElement.invalidateSize();
        }, 500);
    }, [ref]);

    return (
        <Map ref={ref} id="mapId" style={styles.map} center={position} zoom={8}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={position} icon={customMarker}/>
        </Map>
    )
}
