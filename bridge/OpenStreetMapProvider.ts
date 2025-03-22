// OpenStreetMapProvider.ts
import { MapProvider } from "./MapProvider";
import * as L from "leaflet";


export class OpenStreetMapProvider implements MapProvider {
  private map: any;

  initializeMap(elementId: string, center: { lat: number; lng: number; }, zoom: number): void {
    // For example, using Leaflet to display OpenStreetMap
    this.map = L.map(elementId).setView(center, zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors"
    }).addTo(this.map);
    console.log("OpenStreetMap initialized.");
  }

  addMarker(position: { lat: number; lng: number }, title: string): void {
    if (!this.map) {
      console.error("Map is not initialized!");
      return;
    }
    L.marker([position.lat, position.lng]).addTo(this.map).bindPopup(title);
    console.log(`OpenStreetMap Marker added: ${title}`);
  }
}
