
import { MapProvider } from "./MapProvider";

export abstract class MapView{

    protected provider:MapProvider | undefined;

    constructor(provider:MapProvider){
        this.provider = provider;
    }

    abstract displayMap(elementId:string):void;
    abstract placeMarker(lat:number,lng:number,title:string):void;

    

}
// abstract class MapView acts as a refined abstraction.
//It holds a reference to a MapProvider and delegates tasks to the concrete implementations.

//This decouples the abstraction (MapView) from the implementation (GoogleMapProvider or OpenStreetMapProvider).

// MapView class ---> This is a Map Manager (Refined Abstraction)
// This is where we abstract (or hide) the complexity of choosing which map provider we want. 
// It doesn’t need to know how the map is initialized, just that it can ask a provider to do it.