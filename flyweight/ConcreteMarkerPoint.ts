//step 2: concrete implementation of the interface in step 1

import { MarkerPoint } from "./Markerpoint";

//concrete implementation of the flyweight interface
export class ConcreteMarkerPoint implements MarkerPoint {
  icon: string;
  color: string;

  constructor(icon: string, color: string) {
    this.icon = icon;
    this.color = color;
  }

  //display method with extrinsic state (coordinates)
  display(x: number, y: number): void {
    console.log(
      `Marker at (${x} ${y}) with icon: ${this.icon} and color: $this.color}`
    );
  }
}
