//Concrete Implementor

import { MapProvider } from "./MapProvider";

declare var google: any; // Assuming the Google Maps API is loaded

export class GoogleMapsProvider implements MapProvider {
    private map:any;

    initializeMap(elementId: string, center: { lat: number; lng: number; }, zoom: number): void {
        this.map = new google.maps.Map(document.getElementById(elementId),{center,zoom});

        console.log('google maps initialised');

         
    }
    addMarker(position: { lat: number; lng: number; }, title: string): void {
        if(!this.map){

            console.log('map not initialised');
            return;
        }

        new google.maps.Marker({position,title});
        console.log(`Marker added at position ${position.lat}, ${position.lng} : ${title}`);
    }
}

//Implement Concrete Providers (Implementors)
//Each map provider will implement MapProvider, allowing for different implementations.


