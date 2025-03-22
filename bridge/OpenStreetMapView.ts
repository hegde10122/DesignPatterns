import { MapView } from './MapView';
import { MapProvider } from './MapProvider';
import * as L from "leaflet";

export class OpenStreetMapView extends MapView {
    constructor(provider: MapProvider) {
        super(provider); // Passing the provider to the parent class (MapView)
    }

    displayMap(elementId: string): void {
        // OpenStreetMap specific implementation
        const map = L.map(elementId).setView([19.505, 73.09], 13); // Example coordinates from Indian location
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);
    }

    placeMarker(lat: number, lng: number, title: string): void {
        // Adding a marker to the OpenStreetMap
        const map = L.map("map").setView([lat, lng], 13);
        L.marker([lat, lng]).addTo(map).bindPopup(title);
    }
}
