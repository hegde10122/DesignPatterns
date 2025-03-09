import { ConcreteMarkerPoint } from "./ConcreteMarkerPoint";
import { MarkerPoint } from "./Markerpoint";

//flyweight factory to manage shared markerpoint objects
export class MarkerPointFactory {
  private readonly markerPoints: Map<string, MarkerPoint> = new Map();

  //get or create a shared markerpoint
  getmarkerPoint(icon: string, color: string): MarkerPoint {
    const key = `${icon}-${color}`;

    if (!this.markerPoints.has(key)) {
      //create a new marker point if it doesn't exist in the pool
      this.markerPoints.set(key, new ConcreteMarkerPoint(icon, color)); //reurn shared instance
    }

    return this.markerPoints.get(key)!;
  }
}
