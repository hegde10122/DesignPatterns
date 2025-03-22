//Implementor interface

 export interface MapProvider {

    initializeMap(elementId:string,center:{lat:number,lng:number},zoom:number):void;
    addMarker(position: {lat:number,lng:number},title:string):void;

 }

 //This interface declares operations that concrete mapping providers must implement.

 /**
   The MapProvider interface defines a common structure for all map providers.
   This interface acts as the bridge that ensures all map providers implement the same methods. 

   This is the first step where we decide what every map should be able to do. 
   
   All maps, no matter if it's Google Maps or OpenStreetMap, should have similar functionality, such as:
   Initializes the map: Start the map at a specific location with a zoom level.
   Add markers: Put markers (pins) on the map to indicate places.

  */