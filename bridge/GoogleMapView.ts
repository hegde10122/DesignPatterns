import { MapView } from './MapView';
import { MapProvider } from './MapProvider';

export class GoogleMapView extends MapView {
    constructor(provider: MapProvider) {
        super(provider); // Passing the provider to the parent class (MapView)
    }

    displayMap(elementId: string): void {
        // Google Maps specific implementation
        new google.maps.Map(document.getElementById(elementId), {
            center: { lat: 19.7749, lng: 73.4194 },
            zoom: 10,
        });
    }

    placeMarker(lat: number, lng: number, title: string): void {
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat, lng },
            zoom: 13,
        });
        new google.maps.Marker({
            position: { lat, lng },
            map,
            title,
        });
    }
}
