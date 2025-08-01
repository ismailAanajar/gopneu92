"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon not showing up
// This is a common issue with Leaflet and Webpack/Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;

// Custom marker icon (blue with white dot)
const customIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJDOC4xMzQzMiAyIDUgNS4xMzQzMiA1IDlDNSA1LjY2NjY3IDUuMzMzMzMgNi4zMzMzMyA2IDdDNyA4IDggOSA5IDEwQzEwIDExIDExIDEyIDEyIDEyQzEzIDEyIDE0IDExIDE0IDEwQzE0IDkgMTUgOCAxNiA3QzE2LjY2NjcgNi4zMzMzMyAxNyA1LjY2NjY3IDE3IDlDMTEuODU3MTQgMTUgMTIgMjIgMTIgMjJDMTIgMjIgMTIuMTQyOSAxNSAxNyA5QzE4LjY1NjkgNy4xMzQzMiAxOS41IDUuMTM0MzIgMTkuNSA5QzE5LjUgMTIuODY1NyAxNi44NjU3IDE2IDEzIDE2QzkuMTM0MzIgMTYgNiAxMi44NjU3IDYgOUM2IDUuMTM0MzIgOC4xMzQzMiAyIDEyIDJaIiBmaWxsPSIjMjU2MkVBIi8+CjxwYXRoIGQ9PSJNMTIgMTJDMTMuMTA0NiAxMiAxNCAxMS4xMDQ2IDE0IDEwQzE0IDguODk1NDMgMTMuMTA0NiA4IDEyIDhDMTAuODk1NCA4IDEwIDguODk1NDMgMTAgMTBDMTAgMTEuMTA0NiAxMC44OTU0IDEyIDEyIDEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  tooltipAnchor: [0, -32], // point from which the tooltip should open relative to the iconAnchor
});

interface MapLocationProps {
  latitude: number;
  longitude: number;
  address: string;
  phone: string;
}

export function MapLocation({
  latitude,
  longitude,
  address,
  phone,
}: MapLocationProps) {
  const position: [number, number] = [latitude, longitude];

  // Adjust the map center slightly downwards to account for the permanent tooltip
  // A small negative value for latitude shifts the map view south (down)
  const mapCenterOffsetLat = -0.0005; // This value might need fine-tuning based on visual appearance

  const adjustedCenter: [number, number] = [
    latitude + mapCenterOffsetLat,
    longitude,
  ];

  return (
    <MapContainer
      center={adjustedCenter} // Use adjustedCenter here
      zoom={16}
      scrollWheelZoom={false} // Disable scroll wheel zoom initially
      className="h-full w-full rounded-2xl z-0"
      whenReady={() => {
        // Enable scroll wheel zoom only when map is focused/clicked
        // map.target.on("click", () => {
        //   map.target.scrollWheelZoom.enable();
        // });
        // map.target.on("mouseout", () => {
        //   map.target.scrollWheelZoom.disable();
        // });
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a> contributors'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" // CartoDB Positron tiles
      />
      <Marker position={position} icon={customIcon}>
        <Tooltip permanent direction="top" offset={[0, -25]}>
          <div className="font-sans text-gray-800 p-2">
            <p className="font-bold text-lg mb-1">Go Pneu 92</p>
            <p className="text-base">{address}</p>
            <p className="text-base">Tél: {phone}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline mt-2 block text-sm font-medium"
            >
              Voir sur Google Maps
            </a>
          </div>
        </Tooltip>
      </Marker>
    </MapContainer>
  );
}
