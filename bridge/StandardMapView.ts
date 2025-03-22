import { MapView } from "./MapView";

export class StandardMapView extends MapView {

    private center = { lat: 18.779, lng: 72.4194 }; 
    private zoom = 12;

    displayMap(elementId: string): void {
       
        this.provider?.initializeMap(elementId,this.center,this.zoom);
    }
    placeMarker(lat: number, lng: number, title: string): void {
        this.provider?.addMarker({lat,lng},title);
        
    }

}

//The StandardMapView extends MapView, providing higher-level control.
//It allows you to introduce new behaviors in StandardMapView without modifying the core providers.

