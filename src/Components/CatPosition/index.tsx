import React, {createRef, useEffect} from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, {LatLngTuple} from 'leaflet';

// @ts-ignore
const customMarker: L.Icon = new L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [13, 0]
});

interface CatPositionProps {
    position: LatLngTuple;
}

export default function CatPosition({position}: CatPositionProps) {
    const ref = createRef<any>();

    useEffect(() => {
        setTimeout(() => {
            ref.current?.leafletElement.invalidateSize();
        }, 500);
    }, [ref]);

    return (
        <Map ref={ref} id="mapId" style={{height: "600px", width: '600px', display: 'flex'}} center={position} zoom={8}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position} icon={customMarker}>
                <Popup>
                    A pretty CSS3 popup.
                    <br/>
                    Easily customizable.
                </Popup>
            </Marker>
        </Map>
    )
}
