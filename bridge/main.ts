

// Client code example
import { GoogleMapsProvider } from "./GoogleMapsProvider";
import { OpenStreetMapProvider } from "./OpenStreetMapProvider";
import { StandardMapView } from "./StandardMapView";

function main() {


    // Assume there is a div with id "map" in your HTML
    const googleProvider = new GoogleMapsProvider();
    const openstreetmapProvider = new OpenStreetMapProvider();

    const mapView = new StandardMapView(openstreetmapProvider);
    mapView.displayMap("map"); // Initializes the Google Map

    // Later in the application, add markers as needed
    mapView.placeMarker(18.7749, 73.4194, "Mumbai");
    mapView.placeMarker(33.89, 35.50, "Beirut");

}

main();